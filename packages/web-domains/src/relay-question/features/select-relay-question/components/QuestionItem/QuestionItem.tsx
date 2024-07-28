import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';
import { useState } from 'react';

import { Modal } from '../../../../../common/components/Modal/Modal';
import { QuestionDetail } from '../QuestionDetail/QuestionDetail';

import { questionImgBoxCss, questionItemCss, questionTextBoxCss } from './QuestionItem.styles';

interface QuestionItemProps {
  imageUrl: string;
  title: string;
  usedCount: number;
}

export const QuestionItem = ({ imageUrl, title, usedCount }: QuestionItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li css={questionItemCss} onClick={handleOpenModal}>
        <div css={questionImgBoxCss}>
          <Image src={imageUrl} alt={title} width={64} height={64} />
        </div>
        <div css={questionTextBoxCss}>
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
