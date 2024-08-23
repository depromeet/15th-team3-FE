import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';

interface ArrivedQuestionNotificationProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickAnswerLater?: () => void;
}

export const ArrivedQuestionNotification = ({
  isOpen,
  onClose,
  onClickAnswerLater,
  ...rest
}: ArrivedQuestionNotificationProps) => {
  return (
    <Modal {...rest} isOpen={isOpen} onClose={onClose}>
      <div css={{ padding: '12px 0 0' }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }} color={colors.black}>
            릴레이 질문이 도착했어요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            릴레이 질문에 바로 답변해볼까요?
          </Txt>
          <Link href="/answer/opening" css={{ marginTop: '28px', width: '100%' }}>
            <Button>
              <Txt typography="subTitle2" color={colors.white}>
                지금 답변할래요!
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
