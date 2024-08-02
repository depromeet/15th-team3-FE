'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useQueryClient } from '@tanstack/react-query';

import { FIRST_STEP } from '../../../../constants';
import { useIntersect } from '../../../../hooks/useIntersection';
import { USERS_QUERY_KEY } from '../../../start-relay-question/hooks/queries/useMyInfoQuery';
import { useMyMeetingsQuery } from '../../../start-relay-question/hooks/queries/useMyMeetingsQuery';
import { MyInfoResponse } from '../../../start-relay-question/types';
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
  const { questions, fetchStatus, fetchNextPage } = useRelayQuestionListQuery(myMeetings.meetingIds[0] || -1);
  const { targetRef } = useIntersect({
    onIntersect: (entry) => {
      if (entry.isIntersecting && fetchStatus !== 'fetching') {
        fetchNextPage();
      }
    },
  });

  return (
    <section>
      <div css={questionTextBoxCss}>
        <Txt typography="heading1" fontWeight="bold">
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
  const queryClient = useQueryClient();
  const { myMeetings } = useMyMeetingsQuery();
  const { meetingMembers } = useMeetingMemberQuery(myMeetings.meetingIds[0] || -1);

  const myInfo = queryClient.getQueryData<MyInfoResponse>([USERS_QUERY_KEY]);

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
            meetingId={myMeetings.meetingIds[0] || -1}
          />
        ))}
      </ul>
    </section>
  );
};
