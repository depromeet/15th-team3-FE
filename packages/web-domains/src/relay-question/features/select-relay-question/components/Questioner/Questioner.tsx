import { Txt } from '@sambad/sds/components';
import Image from 'next/image';

import { Modal } from '../../../../../common/components/Modal/Modal';
import { useOpenModal } from '../../hooks/useOpenModal';
import { QuestionerDetail } from '../QuestionerDetail/QuestionerDetail';

import { imgWrapperCss, wrapperCss } from './Question.styles';

interface QuestionerProps {
  imageUrl: string;
  name: string;
}

export const Questioner = ({ imageUrl, name }: QuestionerProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useOpenModal();

  return (
    <>
      <li css={wrapperCss} onClick={handleOpenModal}>
        <div css={imgWrapperCss}>
          <Image src={imageUrl} alt={name} width={40} height={40} />
        </div>
        <Txt typography="title2" fontWeight="medium">
          {name}
        </Txt>
      </li>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuestionerDetail imageUrl={imageUrl} name={name} handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};
