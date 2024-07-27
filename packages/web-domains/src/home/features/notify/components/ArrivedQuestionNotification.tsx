import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { RectQuestion } from '../../../../common/asset/rectquestion';
import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';
import { useDialogContext } from '../../../../common/contexts/DialogProvider';
import { Avatar } from '../../../common/Avatar/Avatar';

interface ArrivedQuestionNotificationProps extends ModalProps {}

export const ArrivedQuestionNotification = ({ ...rest }: ArrivedQuestionNotificationProps) => {
  const { isOpen, close } = useDialogContext();

  return (
    <Modal {...rest} isOpen={isOpen} onClose={close}>
      <div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span css={{ marginBottom: '20px' }}>
            <Avatar Icon={RectQuestion} size={80} />
          </span>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }} color={colors.black}>
            릴레이 질문이 도착했어요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            릴레이 질문에 바로 답변해볼까요?
          </Txt>
          <Button css={{ marginTop: '28px' }}>
            <Link href="#">
              <Txt typography="subTitle2" color={colors.white}>
                릴레이 질문 시작하기
              </Txt>
            </Link>
          </Button>
          <Button variant="sub" css={{ border: 'none' }}>
            <Txt typography="title3" color={colors.black}>
              나중에 할게요
            </Txt>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
