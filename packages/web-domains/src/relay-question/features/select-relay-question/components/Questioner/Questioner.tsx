import { Txt } from '@sambad/sds/components';
import { colors } from '@sds/theme';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { useModal } from '../../../../hooks/useModal';
import { usePostRelayQuestionInfo } from '../../hooks/mutations/usePostRelayQuestionInfo';
import { QuestionerDetail } from '../QuestionerDetail/QuestionerDetail';

import { imgWrapperCss, wrapperCss } from './Questioner.styles';

interface QuestionerProps {
  meetingId: number;
  meetingMemberId: number;
  imageUrl: string;
  name: string;
}

export const Questioner = ({ meetingId, meetingMemberId, imageUrl, name }: QuestionerProps) => {
  const openModal = useModal();
  const { postRelayQuestionInfo } = usePostRelayQuestionInfo(meetingId);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOpenModal = async () => {
    const isConfirm = await openModal({
      component: QuestionerDetail,
      componentProps: { imageUrl, name, isRandom: false },
    });

    if (isConfirm) {
      const questionId = Number(searchParams.get('question-id'));

      postRelayQuestionInfo(
        { questionId, meetingMemberId },
        {
          onSuccess: () => {
            router.push(`/share-group?question-id=${questionId}&questioner-name=${name}`);
          },
        },
      );
    }
  };

  return (
    <li css={wrapperCss} onClick={handleOpenModal}>
      <div css={imgWrapperCss}>
        <Image src={imageUrl} alt={name} width={40} height={40} style={{ objectFit: 'cover' }} />
      </div>
      <Txt typography="title2" color={colors.black} fontWeight="medium">
        {name}
      </Txt>
    </li>
  );
};
