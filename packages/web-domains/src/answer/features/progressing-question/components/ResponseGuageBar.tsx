import { Txt } from '@sambad/sds/components';
import { colors, borderRadiusVariants } from '@sambad/sds/theme';

interface ResponseGuageBarProps {
  totalMeetingMemberCount: number;
  responseCount: number;
}

export const ResponseGuageBar = ({ totalMeetingMemberCount, responseCount }: ResponseGuageBarProps) => {
  return (
    <div css={{ display: 'flex', width: '100%', padding: '0 40px', marginTop: '2px' }}>
      <div css={{ width: '100%', marginRight: '16px' }}>
        <Txt typography="body4" css={{ marginRight: '4px' }} color={colors.grey600}>
          {totalMeetingMemberCount}명 중
        </Txt>
        <Txt typography="subTitle2" color={colors.primary500} css={{ marginRight: '3px' }}>
          {responseCount}명
        </Txt>
        <Txt typography="subTitle2" color={colors.grey700}>
          완료
        </Txt>
        <span
          css={{
            padding: 0,
            width: '100%',
            display: 'inline-block',
            backgroundColor: colors.grey400,
            borderRadius: borderRadiusVariants.round,
            height: '8px',
            ':after': {
              content: '""',
              display: 'block',
              width: `${(responseCount / totalMeetingMemberCount) * 100}%`,
              height: '8px',
              backgroundColor: colors.primary500,
              borderRadius: borderRadiusVariants.round,
            },
          }}
        />
      </div>
    </div>
  );
};
