import { Txt } from '@sds/components';
import { colors, borderRadiusVariants, shadow } from '@sds/theme';

export const AnswerCountdownRender = ({
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
