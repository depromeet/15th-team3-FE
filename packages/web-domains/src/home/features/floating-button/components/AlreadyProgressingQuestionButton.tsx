'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import dynamic from 'next/dynamic';
import Countdown from 'react-countdown';

import { getRemainTime } from '../../../common/utils/getRemainTime';

interface AlreadyProgressingQuestionButtonProps {
  time: number | string | Date;
  onClick: () => void;
}

const CountdownRender = dynamic(
  () =>
    import('./AlreadyProgressingQuestionButtonCountdownRender.tsx').then(
      (mod) => mod.AlreadyProgressingQuestionButtonCountdownRender,
    ),
  {
    ssr: true,
  },
);

export const AlreadyProgressingQuestionButton = ({ time, onClick }: AlreadyProgressingQuestionButtonProps) => {
  const countdownTimer = getRemainTime(time);

  return (
    <Button css={{ height: size['3xl'], backgroundColor: colors.grey500 }} onClick={onClick}>
      <Txt typography="subtitle1" color={colors.grey500}>
        <Countdown
          date={countdownTimer}
          renderer={({ hours, minutes, seconds }) => (
            <CountdownRender hours={hours} minutes={minutes} seconds={seconds} />
          )}
        />
      </Txt>
    </Button>
  );
};
