import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';

interface SelectedTargetMemberNotificationProps extends ModalProps {
  onClickAnswerLater?: () => void;

  isOpen: boolean;
  onClose: () => void;
}

export const SelectedTargetMemberNotification = ({
  isOpen,
  onClose,
  onClickAnswerLater,
  ...rest
}: SelectedTargetMemberNotificationProps) => {
  return (
    <Modal {...rest} isOpen={isOpen} onClose={onClose}>
      <div css={{ padding: '12px 0 0' }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }}>
            릴레이 질문인으로 선택되었어요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            릴레이 질문을 바로 작성해볼까요?
          </Txt>
          <Link href="/start-relay-question" css={{ marginTop: '28px', width: '100%' }}>
            <Button>
              <Txt typography="subTitle2" color={colors.white}>
                릴레이 질문 시작하기
              </Txt>
            </Button>
          </Link>
          <Button
            variant="sub"
            css={{ border: 'none' }}
            onClick={() => {
              onClickAnswerLater?.();
              onClose();
            }}
          >
            <Txt typography="title3" color={colors.black}>
              나중에 할게요
            </Txt>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
