import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, shadow } from '@sambad/sds/theme';
import { HTMLAttributes } from 'react';
import Countdown from 'react-countdown';

import { getRemainTime } from '../../../home/common/utils/getRemainTime';

interface AnswerCountDownProps extends HTMLAttributes<HTMLDivElement> {
  timer: string | number | Date;
}

export const AnswerCountDown = ({ timer, ...rest }: AnswerCountDownProps) => {
  const remainTime = getRemainTime(timer);

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
      <Countdown date={remainTime} renderer={CountdownRender} />
    </section>
  );
};

const CountdownRender = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

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
        <Txt typography="heading1" color={colors.black}>
          {renderHours}
        </Txt>
        <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 14px' }}>
          :
        </Txt>
        <Txt typography="heading1" color={colors.black}>
          {renderMinutes}
        </Txt>
        <Txt typography="heading1" color={colors.grey500} css={{ padding: '0 14px' }}>
          :
        </Txt>
        <Txt typography="heading1" color={colors.black}>
          {renderseconds}
        </Txt>
      </div>
    </div>
  );
};
