'use client';

import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';

export const ProgressingQuestionModalCountdownRender = ({
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
