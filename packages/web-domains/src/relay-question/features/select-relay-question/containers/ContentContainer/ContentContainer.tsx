'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { useMyInfoQuery } from '@/relay-question/features/start-relay-question/hooks/queries/useMyInfoQuery';
import { findCurrentMeetingId } from '@/relay-question/utils/findCurrentMeetingId';

import { FIRST_STEP } from '../../../../constants';
import { useIntersect } from '../../../../hooks/useIntersection';
import { useMyMeetingsQuery } from '../../../start-relay-question/hooks/queries/useMyMeetingsQuery';
import { Question } from '../../components/Question/Question';
import { Questioner } from '../../components/Questioner/Questioner';
import { useQueryStringContext } from '../../contexts/QueryStringContext';
import { useMeetingMemberQuery } from '../../hooks/queries/useMeetingMemberQuery';
import { useRelayQuestionListQuery } from '../../hooks/queries/useRelayQuestionListQuery';

import { questionListCss, questionTextBoxCss } from './ContentContainer.styles';

export const ContentContainer = () => {
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionList />;

  return <NextQuestionerList />;
};

const QuestionList = () => {
  const { myMeetings } = useMyMeetingsQuery();
  const { questions, fetchStatus, fetchNextPage } = useRelayQuestionListQuery(findCurrentMeetingId(myMeetings));

  const { targetRef } = useIntersect({
    onIntersect: (entry) => {
      if (entry.isIntersecting && fetchStatus !== 'fetching') {
        fetchNextPage();
      }
    },
  });

  if (!questions) return <div>loading</div>;
  if (questions.length === 0) return <div>empty list</div>;

  return (
    <section>
      <div css={questionTextBoxCss}>
        <Txt typography="heading1" color={colors.black} fontWeight="bold">
          어떤 질문으로 물어볼까요?
        </Txt>
      </div>
      <ul css={questionListCss}>
        {questions.map(({ questionId, questionImageFileUrl, title, usedCount }) => (
          <Question
            key={questionId}
            id={questionId}
            imageUrl={questionImageFileUrl}
            title={title}
            usedCount={usedCount}
          />
        ))}
        <div ref={targetRef} />
      </ul>
    </section>
  );
};

const NextQuestionerList = () => {
  const { myMeetings } = useMyMeetingsQuery();
  const { meetingMembers } = useMeetingMemberQuery(findCurrentMeetingId(myMeetings));

  const { myInfo } = useMyInfoQuery();

  if (!meetingMembers || !myInfo) return <div>loading</div>;

  return (
    <section>
      <div css={questionTextBoxCss}>
        <Txt typography="heading1" fontWeight="bold">
          다음 릴레이 질문인은 <br />
          누구로 할까요?
        </Txt>
        <div>
          <Txt color={colors.grey600} typography="subTitle2" fontWeight="semibold">
            {myInfo?.name}
          </Txt>
          <Txt color={colors.grey600} typography="body3" fontWeight="regular">
            님이 시작한 릴레이 질문이 끝나면 <br />
            이어서 질문을 할 모임원을 골라보세요!
          </Txt>
        </div>
      </div>
      <ul css={questionListCss}>
        {meetingMembers.map(({ profileImageFileUrl, name, meetingMemberId }, index) => (
          <Questioner
            key={index}
            imageUrl={profileImageFileUrl}
            name={name}
            meetingMemberId={meetingMemberId}
            meetingId={findCurrentMeetingId(myMeetings)}
          />
        ))}
      </ul>
    </section>
  );
};
