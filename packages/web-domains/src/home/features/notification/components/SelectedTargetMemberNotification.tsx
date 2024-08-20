import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';
import { useDialogContext } from '../../../../common/contexts/DialogProvider';
interface SelectedTargetMemberNotificationProps extends ModalProps {}

export const SelectedTargetMemberNotification = ({ ...rest }: SelectedTargetMemberNotificationProps) => {
  const { isOpen, close } = useDialogContext();

  return (
    <Modal {...rest} isOpen={isOpen} onClose={close}>
      <div>
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
        </div>
      </div>
    </Modal>
  );
};
