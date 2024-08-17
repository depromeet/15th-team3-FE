import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, shadow } from '@sambad/sds/theme';
import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';
import Countdown from 'react-countdown';

import { getRemainTime } from '../../../home/common/utils/getRemainTime';

interface AnswerCountDownProps extends HTMLAttributes<HTMLDivElement> {
  timer: string | number | Date;
}

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

const CountdownRender = ({
  hours,
  minutes,
  seconds,
  isTenminuteleft,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  isTenminuteleft: boolean;
}) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const timeColor = isTenminuteleft ? colors.primary500 : colors.black;

  return (
    <div
      css={{
        width: '295px',
        height: '74px',
        borderRadius: borderRadiusVariants.medium,
        backgroundColor: colors.white,
        boxShadow: shadow.elevation1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Txt typography="heading1" color={timeColor}>
          {renderHours}
        </Txt>
        <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 14px' }}>
          :
        </Txt>
        <Txt typography="heading1" color={timeColor}>
          {renderMinutes}
        </Txt>
        <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 14px' }}>
          :
        </Txt>
        <Txt typography="heading1" color={timeColor}>
          {renderseconds}
        </Txt>
      </div>
    </div>
  );
};
