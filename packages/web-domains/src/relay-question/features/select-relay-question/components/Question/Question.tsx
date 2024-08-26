import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useModal } from '../../../../hooks/useModal';
import { useRelayQuestionQuery } from '../../hooks/queries/useRelayQuestionQuery';
import { QuestionDetail } from '../QuestionDetail/QuestionDetail';

import { questionImgWrapperCss, questionTextWrapperCss, wrapperCss } from './Question.styles';

interface QuestionProps {
  id: number;
  imageUrl: string;
  title: string;
  usedCount: number;
  meetingId: number;
}

export const Question = ({ id, imageUrl, title, usedCount, meetingId }: QuestionProps) => {
  const openModal = useModal();
  const { refetch } = useRelayQuestionQuery(1);

  const router = useRouter();

  const handleOpenModal = async () => {
    const question = (await refetch()).data;

    if (!question) return;

    const { answers } = question;

    const isConfirm = await openModal({
      component: QuestionDetail,
      componentProps: { imageUrl, title, answers },
    });

    if (isConfirm) {
      router.push(`/${meetingId}/select-relay-question?current-step=2&question-id=${id}`);
    }
  };

  return (
    <li css={wrapperCss} onClick={handleOpenModal}>
      <div css={questionImgWrapperCss}>
        <Image src={imageUrl} alt={title} width={64} height={64} style={{ objectFit: 'cover' }} />
      </div>
      <div css={questionTextWrapperCss}>
        <Txt color={colors.black} typography="title2" fontWeight="medium" style={{ wordBreak: 'keep-all' }}>
          {title}
        </Txt>
        <Txt color={colors.grey700} typography="body4" fontWeight="regular" style={{ wordBreak: 'keep-all' }}>
          지금까지 {usedCount}개의 모임에서 사용했어요!
        </Txt>
      </div>
    </li>
  );
};
