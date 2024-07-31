import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useQueryString } from '../../../../hooks/useQueryString';
import { useRelayQuestionQuery } from '../../hooks/queries/useRelayQuestionQuery';
import { useModal } from '../../hooks/useModal';
import { QuestionDetail } from '../QuestionDetail/QuestionDetail';

import { questionImgWrapperCss, questionTextWrapperCss, wrapperCss } from './Question.styles';

interface QuestionProps {
  id: number;
  imageUrl: string;
  title: string;
  usedCount: number;
}

export const Question = ({ id, imageUrl, title, usedCount }: QuestionProps) => {
  const openModal = useModal();
  const { question } = useRelayQuestionQuery(id);

  const router = useRouter();
  const { updateQueryString } = useQueryString();

  const handleOpenModal = async () => {
    const isConfirm = await openModal({
      component: QuestionDetail,
      componentProps: { imageUrl, title, answers: question.answers },
    });

    if (isConfirm) {
      router.push(`/select-relay-question?${updateQueryString({ key: 'current-step', value: '2' })}`);
    }
  };

  return (
    <li css={wrapperCss} onClick={handleOpenModal}>
      <div css={questionImgWrapperCss}>
        <Image src={imageUrl} alt={title} width={64} height={64} />
      </div>
      <div css={questionTextWrapperCss}>
        <Txt color={colors.black} typography="title2" fontWeight="medium">
          {title}
        </Txt>
        <Txt color={colors.grey700} typography="body4" fontWeight="regular">
          지금까지 {usedCount}개의 모임에서 사용했어요!
        </Txt>
      </div>
    </li>
  );
};
