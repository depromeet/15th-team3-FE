import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { Modal } from '../../../../../common/components/Modal/Modal';
import { useOpenModal } from '../../hooks/useOpenModal';
import { QuestionDetail } from '../QuestionDetail/QuestionDetail';

import { questionImgWrapperCss, questionTextWrapperCss, wrapperCss } from './Question.styles';

interface QuestionItemProps {
  imageUrl: string;
  title: string;
  usedCount: number;
}

export const Question = ({ imageUrl, title, usedCount }: QuestionItemProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useOpenModal();

  return (
    <>
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuestionDetail
          imageUrl={imageUrl}
          title={title}
          answers={[
            { answerId: 1, content: '러닝' },
            { answerId: 2, content: '러닝' },
            { answerId: 3, content: '러닝' },
          ]}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
};
