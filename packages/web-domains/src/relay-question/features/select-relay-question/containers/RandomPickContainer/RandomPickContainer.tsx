'use client';

import { css } from '@emotion/react';
import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';

import { RelayRandomButtonDocumentIcon } from '../../../../assets/RelayRandomButtonIcon';
import { FIRST_STEP } from '../../../../constants';
import { useQueryString } from '../../../../hooks/useQueryString';
import { QuestionDetail } from '../../components/QuestionDetail/QuestionDetail';
import { QuestionerDetail } from '../../components/QuestionerDetail/QuestionerDetail';
import { ToolTip } from '../../components/ToolTip/ToolTip';
import { useQueryStringContext } from '../../contexts/QueryStringContext';
import { useRandomNextQuestionerQuery } from '../../hooks/queries/useRandomNextQuestionerQuery';
import { useRandomQuestionQuery } from '../../hooks/queries/useRandomQuestionQuery';
import { useModal } from '../../hooks/useModal';
import { useToolTipShow } from '../../hooks/useToolTipShow';

import { wrapperCss } from './RandomPickContainer.styles';

export const RandomPickContainer = () => {
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionRandomPick />;

  return <QuestionerRandomPick />;
};

const QuestionRandomPick = () => {
  const router = useRouter();
  const openModal = useModal();

  const { updateQueryString } = useQueryString();
  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });
  const { refetch } = useRandomQuestionQuery([]);

  const handleOpenModal = async () => {
    const question = (await refetch()).data;

    if (!question) return;

    const { questionImageFileUrl, title, answers } = question;

    const isConfirm = await openModal({
      component: QuestionDetail,
      componentProps: { imageUrl: questionImageFileUrl, title: title, answers: answers },
    });

    if (isConfirm) {
      router.push(`/select-relay-question?${updateQueryString({ key: 'current-step', value: '2' })}`);
    }
  };

  return (
    <section css={wrapperCss}>
      {isShowToolTip && <ToolTip>어떤 질문을 선택할지 고민인가요?</ToolTip>}
      <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
        <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
        랜덤 선택
      </Button>
    </section>
  );
};

const MEETING_ID = 1;

const QuestionerRandomPick = () => {
  const router = useRouter();
  const openModal = useModal();

  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });
  const { refetch } = useRandomNextQuestionerQuery({ meetingId: MEETING_ID, excludeMemberIds: [0] });

  const handleOpenModal = async () => {
    const questioner = (await refetch()).data;

    if (!questioner) return;

    const { name, profileImageFileUrl } = questioner;

    const isConfirm = await openModal({
      component: QuestionerDetail,
      componentProps: { imageUrl: profileImageFileUrl, name, isRandom: true },
    });

    if (isConfirm) {
      router.push(`/share-group`);
    }
  };

  return (
    <section css={wrapperCss}>
      {isShowToolTip && <ToolTip>다음 질문인을 누구로 할지 고민인가요?</ToolTip>}
      <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
        <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
        랜덤 선택
      </Button>
    </section>
  );
};
