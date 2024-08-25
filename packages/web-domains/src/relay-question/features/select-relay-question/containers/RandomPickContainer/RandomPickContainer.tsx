'use client';

import { css } from '@emotion/react';
import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { findCurrentMeetingId } from '@/relay-question/utils/findCurrentMeetingId';

import { ToolTip } from '../../../../../common/components/ToolTip/ToolTip';
import { RelayRandomButtonDocumentIcon } from '../../../../assets/RelayRandomButtonIcon';
import { Modal } from '../../../../common/Modal';
import { FIRST_STEP } from '../../../../constants';
import { useMyMeetingsQuery } from '../../../start-relay-question/hooks/queries/useMyMeetingsQuery';
import { QuestionDetail } from '../../components/QuestionDetail/QuestionDetail';
import { QuestionerDetail } from '../../components/QuestionerDetail/QuestionerDetail';
import { useQueryStringContext } from '../../contexts/QueryStringContext';
import { usePostRelayQuestionInfo } from '../../hooks/mutations/usePostRelayQuestionInfo';
import { useMemberMeQuery } from '../../hooks/queries/useMemberMeQuery';
import { useRandomNextQuestionerQuery } from '../../hooks/queries/useRandomNextQuestionerQuery';
import { useRandomQuestionQuery } from '../../hooks/queries/useRandomQuestionQuery';
import { useToolTipShow } from '../../hooks/useToolTipShow';

import { wrapperCss } from './RandomPickContainer.styles';

export const RandomPickContainer = () => {
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionRandomPick />;

  return <QuestionerRandomPick />;
};

const QuestionRandomPick = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });

  const { myMeetings } = useMyMeetingsQuery();
  const { memberMe } = useMemberMeQuery(findCurrentMeetingId(myMeetings));
  const { question, refetchQuestion } = useRandomQuestionQuery([memberMe?.meetingMemberId!]);

  const handleOpenModal = () => {
    setIsOpen(true);
    refetchQuestion();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmModal = () => {
    router.push(`/select-relay-question?current-step=2&question-id=${question?.questionId}`);

    handleCloseModal();
  };

  return (
    <>
      <section css={wrapperCss}>
        {isShowToolTip && <ToolTip>어떤 질문을 선택할지 고민인가요?</ToolTip>}
        <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
          <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
          랜덤 선택
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {question && (
          <QuestionDetail
            imageUrl={question.questionImageFileUrl}
            title={question.title}
            answers={question.answers}
            onClose={handleCloseModal}
            onConfirm={handleConfirmModal}
            onRefetch={refetchQuestion}
            isRandom
          />
        )}
      </Modal>
    </>
  );
};

const QuestionerRandomPick = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });

  const { myMeetings } = useMyMeetingsQuery();
  const { memberMe } = useMemberMeQuery(findCurrentMeetingId(myMeetings));
  const { questioner, refetchQuestioner } = useRandomNextQuestionerQuery({
    meetingId: findCurrentMeetingId(myMeetings),
    excludeMemberIds: [memberMe?.meetingMemberId!],
  });

  const { postRelayQuestionInfo } = usePostRelayQuestionInfo(findCurrentMeetingId(myMeetings));

  const handleOpenModal = () => {
    setIsOpen(true);
    refetchQuestioner();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmModal = () => {
    if (!questioner) return;

    const { meetingMemberId } = questioner;
    const questionId = Number(searchParams.get('question-id'));

    postRelayQuestionInfo(
      { questionId, meetingMemberId },
      {
        onSuccess: () => {
          router.push(`/share-group?question-id=${questionId}`);
        },
      },
    );
  };

  return (
    <>
      <section css={wrapperCss}>
        {isShowToolTip && <ToolTip>다음 질문인을 누구로 할지 고민인가요?</ToolTip>}
        <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
          <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
          랜덤 선택
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {questioner && (
          <QuestionerDetail
            imageUrl={questioner.profileImageFileUrl}
            name={questioner.name}
            onClose={handleCloseModal}
            onConfirm={handleConfirmModal}
            onRefetch={refetchQuestioner}
            isRandom
          />
        )}
      </Modal>
    </>
  );
};
