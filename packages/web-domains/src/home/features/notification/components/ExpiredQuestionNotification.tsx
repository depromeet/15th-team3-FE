import { Txt, Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { RectQuestion } from '@/common/asset/rectquestion';
import { Modal, ModalProps } from '@/common/components/Modal/Modal';
import { Avatar } from '@/home/common/components/Avatar/Avatar';

export const ExpiredQuestionNotification = ({ ...rest }: ModalProps) => {
  return (
    <Modal {...rest}>
      <div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span css={{ marginBottom: '20px' }}>
            <Avatar Icon={RectQuestion} size={80} />
          </span>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }} color={colors.black}>
            마감기한이 지난 릴레이 질문이에요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            답변시간이 마감되어 답변이 불가해요
          </Txt>
          <Button css={{ marginTop: '28px' }}>
            <Link href="#">
              <Txt typography="subTitle2" color={colors.white}>
                결과 보러가기
              </Txt>
            </Link>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
