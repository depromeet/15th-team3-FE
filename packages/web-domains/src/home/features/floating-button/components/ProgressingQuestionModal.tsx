import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';
import { useDialogContext } from '../../../../common/contexts/DialogProvider';

interface ProgressingQuestionModalProps extends ModalProps {
  countdownTimer: number | string | Date;
}

const CountdownRender = dynamic(
  () =>
    import('./ProgressingQuestionModalCountdownRender.tsx').then((mod) => mod.ProgressingQuestionModalCountdownRender),
  {
    ssr: true,
  },
);

export const ProgressingQuestionModal = ({ countdownTimer, ...rest }: ProgressingQuestionModalProps) => {
  const { isOpen, close } = useDialogContext();

  const timer = countdownTimer ? countdownTimer : dayjs().valueOf();

  return (
    <Modal {...rest} css={{ width: '312px' }} isOpen={isOpen} onClose={close}>
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
            date={timer}
            renderer={({ hours, minutes, seconds }) => (
              <CountdownRender hours={hours} minutes={minutes} seconds={seconds} />
            )}
          />
          <Button variant="sub">
            <Txt typography="title3" color={colors.black}>
              닫기
            </Txt>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
