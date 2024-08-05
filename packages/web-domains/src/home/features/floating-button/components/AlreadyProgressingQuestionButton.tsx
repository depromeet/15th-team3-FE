import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Countdown from 'react-countdown';

// import { useDialogContext } from '../../../../common/contexts/DialogProvider';
import { getRemainTime } from '../../../common/utils/getRemainTime';

interface AlreadyProgressingQuestionButtonProps {
  time: number | string | Date;
}

export const AlreadyProgressingQuestionButton = ({ time }: AlreadyProgressingQuestionButtonProps) => {
  const countdownTimer = getRemainTime(time);

  return (
    <Button css={{ height: size['3xl'], backgroundColor: colors.grey500 }}>
      <Txt typography="subtitle1" color={colors.grey500}>
        <Countdown date={countdownTimer} renderer={CountdownRender} />
      </Txt>
    </Button>
  );
};

const CountdownRender = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div>
      <Txt typography="subtitle1" color={colors.grey600}>
        {renderHours}
      </Txt>
      <Txt typography="subtitle1" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="subtitle1" color={colors.grey600}>
        {renderMinutes}
      </Txt>
      <Txt typography="subtitle1" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="subtitle1" color={colors.grey600}>
        {renderseconds}
      </Txt>
    </div>
  );
};
