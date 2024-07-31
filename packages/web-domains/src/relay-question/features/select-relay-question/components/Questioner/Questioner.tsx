import { Txt } from '@sambad/sds/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useModal } from '../../hooks/useModal';
import { QuestionerDetail } from '../QuestionerDetail/QuestionerDetail';

import { imgWrapperCss, wrapperCss } from './Question.styles';

interface QuestionerProps {
  imageUrl: string;
  name: string;
}

export const Questioner = ({ imageUrl, name }: QuestionerProps) => {
  const openModal = useModal();
  const router = useRouter();

  const handleOpenModal = async () => {
    const isConfirm = await openModal({
      component: QuestionerDetail,
      componentProps: { imageUrl, name, isRandom: false },
    });

    if (isConfirm) router.push('/share-group');
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
