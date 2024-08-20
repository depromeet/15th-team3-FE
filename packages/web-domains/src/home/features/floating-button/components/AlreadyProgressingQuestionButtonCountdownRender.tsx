'use client';

import { Txt } from '@sds/components';
import { colors } from '@sds/theme';

export const AlreadyProgressingQuestionButtonCountdownRender = ({
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
