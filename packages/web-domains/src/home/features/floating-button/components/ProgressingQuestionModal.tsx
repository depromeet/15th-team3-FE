import { Button, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import { getRemainTime } from '@/home/common/utils/getRemainTime.ts';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';

interface ProgressingQuestionModalProps extends ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  time: number | string | Date;
}

const CountdownRender = dynamic(
  () =>
    import('./ProgressingQuestionModalCountdownRender.tsx').then((mod) => mod.ProgressingQuestionModalCountdownRender),
  {
    ssr: true,
    loading: () => (
      <div
        css={{
          width: '198px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '76px',
          padding: '20px 28px',
          borderRadius: borderRadiusVariants.medium,
          backgroundColor: colors.grey200,
          marginTop: '20px',
          marginBottom: '28px',
        }}
      />
    ),
  },
);

export const ProgressingQuestionModal = ({ isOpen, time, onClose, ...rest }: ProgressingQuestionModalProps) => {
  const countdownTimer = getRemainTime(time);

  return (
    <Modal {...rest} css={{ width: '312px' }} isOpen={isOpen} onClose={onClose}>
      <div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Txt as="p" typography="heading2" color={colors.black}>
            아직 진행 중인
          </Txt>
          <Txt as="p" typography="heading2" css={{ marginBottom: '8px' }} color={colors.black}>
            릴레이 질문이 있어요!
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            마감 시간이 지나면 새로운
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600}>
            릴레이 질문을 생성할 수 있어요
          </Txt>
          <Countdown
            date={countdownTimer}
            renderer={({ hours, minutes, seconds }) => (
              <CountdownRender hours={hours} minutes={minutes} seconds={seconds} />
            )}
          />
          <Button variant="sub" onClick={onClose}>
            <Txt typography="title3" color={colors.black}>
              닫기
            </Txt>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
