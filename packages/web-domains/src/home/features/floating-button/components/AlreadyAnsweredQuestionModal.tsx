import { Txt, Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { Modal, ModalProps } from '@/common/components/Modal/Modal';

export const AlreadyAnsweredQuestionModal = ({ ...rest }: ModalProps) => {
  return (
    <Modal {...rest}>
      <div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }} color={colors.black}>
            이미 답변한 릴레이 질문이에요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            릴레이 질문 답변은 수정이 불가능해요
          </Txt>
          <Button css={{ marginTop: '28px' }}>
            <Txt typography="subTitle2" color={colors.white}>
              닫기
            </Txt>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
