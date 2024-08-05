import { Button, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';
import Countdown from 'react-countdown';

import { Modal, ModalProps } from '../../../../common/components/Modal/Modal';
import { useDialogContext } from '../../../../common/contexts/DialogProvider';

interface ProgressingQuestionModalProps extends ModalProps {
  countdownTimer: number | string | Date;
}

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
          <Countdown date={timer} renderer={CountdownRender} />
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

const CountdownRender = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
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
    >
      <Txt typography="heading1" color={colors.black}>
        {renderHours}
      </Txt>
      <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 8px' }}>
        :
      </Txt>
      <Txt typography="heading1" color={colors.black}>
        {renderMinutes}
      </Txt>
      <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 8px' }}>
        :
      </Txt>
      <Txt typography="heading1" color={colors.black}>
        {renderseconds}
      </Txt>
    </div>
  );
};
