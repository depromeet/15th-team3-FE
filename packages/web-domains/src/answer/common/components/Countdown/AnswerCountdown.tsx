import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { HTMLAttributes } from 'react';
import Countdown from 'react-countdown';

import { getRemainTime } from '../../../../home/common/utils/getRemainTime';

interface AnswerCountDownProps extends HTMLAttributes<HTMLDivElement> {
  timer: string | number | Date;
}

const CountdownRender = dynamic(() => import('./AnswerCountdownRender.tsx').then((mod) => mod.AnswerCountdownRender), {
  ssr: true,
});

export const AnswerCountDown = ({ timer, ...rest }: AnswerCountDownProps) => {
  const remainTime = getRemainTime(timer);

  const isTenminuteleft = remainTime <= dayjs().minute(10).valueOf();

  return (
    <section
      css={{
        width: '100%',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      {...rest}
    >
      <Txt as="p" typography="body4" css={{ marginBottom: '8px' }} color={colors.grey600}>
        마감까지 남은 시간
      </Txt>
      <Countdown
        date={remainTime}
        renderer={({ hours, minutes, seconds }) => (
          <CountdownRender hours={hours} minutes={minutes} seconds={seconds} isTenminuteleft={isTenminuteleft} />
        )}
      />
    </section>
  );
};
