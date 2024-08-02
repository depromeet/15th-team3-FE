import { Txt } from '@sambad/sds/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { usePostRelayQuestionInfo } from '../../hooks/mutations/usePostRelayQuestionInfo';
import { useModal } from '../../hooks/useModal';
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

  const handleOpenModal = async () => {
    const isConfirm = await openModal({
      component: QuestionerDetail,
      componentProps: { imageUrl, name, isRandom: false },
    });

    if (isConfirm) {
      const searchParams = new URLSearchParams(location.search);

      postRelayQuestionInfo(
        { questionId: Number(searchParams.get('question-id')), meetingMemberId },
        {
          onSuccess: () => {
            router.push('/share-group');
          },
        },
      );
    }
  };

  return (
    <li css={wrapperCss} onClick={handleOpenModal}>
      <div css={imgWrapperCss}>
        <Image src={imageUrl} alt={name} width={40} height={40} />
      </div>
      <Txt typography="title2" fontWeight="medium">
        {name}
      </Txt>
    </li>
  );
};
