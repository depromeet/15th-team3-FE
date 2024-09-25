'use client';

import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';

export const InActiveCountdownRender = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const renderHours = hours < 10 ? `0${hours}` : `${hours}`;
  const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const renderseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div
      css={{
        width: '97px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '29px',
        padding: '4px 8px',
        borderRadius: borderRadiusVariants.medium,
        backgroundColor: colors.grey300,
        marginTop: '16px',
      }}
    >
      <Txt typography="title3" color={colors.grey600}>
        {renderHours}
      </Txt>
      <Txt typography="title3" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="title3" color={colors.grey600}>
        {renderMinutes}
      </Txt>
      <Txt typography="title3" color={colors.grey600} css={{ padding: '0 4px' }}>
        :
      </Txt>
      <Txt typography="title3" color={colors.grey600}>
        {renderseconds}
      </Txt>
    </div>
  );
};
