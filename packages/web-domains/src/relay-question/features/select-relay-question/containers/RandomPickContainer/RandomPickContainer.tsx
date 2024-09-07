'use client';

import { css } from '@emotion/react';
import { useSetTimeBoolean } from '@sambad/react-utils';
import { Button, ToolTip } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { RelayRandomButtonDocumentIcon } from '../../../../assets/RelayRandomButtonIcon';
import { Modal } from '../../../../common/Modal';
import { FIRST_STEP } from '../../../../constants';
import { QuestionDetail } from '../../components/QuestionDetail/QuestionDetail';
import { QuestionerDetail } from '../../components/QuestionerDetail/QuestionerDetail';
import { useQueryStringContext } from '../../contexts/QueryStringContext';
import { usePostRelayQuestionInfo } from '../../hooks/mutations/usePostRelayQuestionInfo';
import { useMemberMeQuery } from '../../hooks/queries/useMemberMeQuery';
import { useRandomNextQuestionerQuery } from '../../hooks/queries/useRandomNextQuestionerQuery';
import { useRandomQuestionQuery } from '../../hooks/queries/useRandomQuestionQuery';

import { wrapperCss } from './RandomPickContainer.styles';

interface Props {
  meetingId: number;
}

export const RandomPickContainer = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionRandomPick meetingId={Number(meetingId)} />;

  return <QuestionerRandomPick meetingId={Number(meetingId)} />;
};

const QuestionRandomPick = ({ meetingId }: Props) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isShowToolTip = useSetTimeBoolean(5000, true);

  const { memberMe, isLoading: isLoadingMember } = useMemberMeQuery(meetingId);
  const {
    question,
    refetchQuestion,
    isLoading: isLoadingQuestion,
  } = useRandomQuestionQuery([memberMe?.meetingMemberId!]);

  const handleOpenModal = () => {
    setIsOpen(true);
    refetchQuestion();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmModal = () => {
    router.push(`/${meetingId}/select-relay-question?current-step=2&question-id=${question?.questionId}`);

    handleCloseModal();
  };

  if (isLoadingMember || isLoadingQuestion) return;

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

const QuestionerRandomPick = ({ meetingId }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isShowToolTip = useSetTimeBoolean(5000, true);

  const { memberMe, isLoading: isLoadingMember } = useMemberMeQuery(meetingId);
  const {
    questioner,
    refetchQuestioner,
    isLoading: isLoadingQuestioner,
  } = useRandomNextQuestionerQuery({
    meetingId,
    excludeMemberIds: [memberMe?.meetingMemberId!],
  });

  const { postRelayQuestionInfo, isPending } = usePostRelayQuestionInfo(meetingId);

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
          router.push(`/${meetingId}/share-group?question-id=${questionId}`);
        },
      },
    );
  };

  if (isLoadingMember || isLoadingQuestioner) return;

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
            isPending={isPending}
          />
        )}
      </Modal>
    </>
  );
};
