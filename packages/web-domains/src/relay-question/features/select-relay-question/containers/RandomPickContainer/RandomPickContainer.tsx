'use client';

import { css } from '@emotion/react';
import { Button } from '@sambad/sds/components';
import { size } from '@sambad/sds/theme';

import { Modal } from '../../../../../common/components/Modal/Modal';
import { RelayRandomButtonDocumentIcon } from '../../../../assets/RelayRandomButtonIcon';
import { FIRST_STEP } from '../../../../constants';
import { QuestionDetail } from '../../components/QuestionDetail/QuestionDetail';
import { QuestionerDetail } from '../../components/QuestionerDetail/QuestionerDetail';
import { ToolTip } from '../../components/ToolTip/ToolTip';
import { useQueryStringContext } from '../../contexts/QueryStringContext';
import { useOpenModal } from '../../hooks/useOpenModal';
import { useToolTipShow } from '../../hooks/useToolTipShow';

import { wrapperCss } from './RandomPickContainer.styles';

// TODO: imageUrl context
const IMAGE_URL = '';
const TITLE = '';

export const RandomPickContainer = () => {
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionRandomPick />;

  return <QuestionerRandomPick />;
};

const QuestionRandomPick = () => {
  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });
  const { isModalOpen, handleOpenModal, handleCloseModal } = useOpenModal();

  return (
    <>
      <section css={wrapperCss}>
        {isShowToolTip && <ToolTip>어떤 질문을 선택할지 고민인가요?</ToolTip>}
        <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
          <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
          랜덤 선택
        </Button>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuestionDetail
          imageUrl={IMAGE_URL}
          title={TITLE}
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

const IMAGE_URL_QUESTIONER = '';
const NAME = '장종오';

const QuestionerRandomPick = () => {
  const { isShowToolTip } = useToolTipShow({ showTime: 5000 });
  const { isModalOpen, handleOpenModal, handleCloseModal } = useOpenModal();

  return (
    <>
      <section css={wrapperCss}>
        {isShowToolTip && <ToolTip>다음 질문인을 누구로 할지 고민인가요?</ToolTip>}
        <Button css={css({ padding: `${size['4xs']} ${size['2xs']}` })} onClick={handleOpenModal}>
          <RelayRandomButtonDocumentIcon css={css({ marginRight: `${size['6xs']}` })} />
          랜덤 선택
        </Button>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuestionerDetail imageUrl={IMAGE_URL_QUESTIONER} name={NAME} handleCloseModal={handleCloseModal} isRandom />
      </Modal>
    </>
  );
};
