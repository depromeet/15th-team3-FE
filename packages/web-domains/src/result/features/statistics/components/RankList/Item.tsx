import { Icon, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { itemCss } from './styles';

interface RankListItemProps {
  rank: number;
  content: string;
  count: number;
  percentage: number;
}

const RANK_COLOR_MAP = [colors.tertiary400, colors.primary400, colors.secondary400];

export const RankListItem = (props: RankListItemProps) => {
  const { rank, content, count, percentage } = props;

  const isCrownRank = rank <= 3;
  const color = isCrownRank ? RANK_COLOR_MAP[rank - 1] : undefined;

  return (
    <div css={itemCss}>
      {isCrownRank ? (
        <Icon name="crown" size={16} color={color} />
      ) : (
        <Txt typography="title3" color={colors.grey600} style={{ minWidth: size['3xs'] }}>
          {rank}
        </Txt>
      )}
      <Txt typography="title2" style={{ paddingLeft: size['3xs'] }}>
        {content}
      </Txt>
      <Txt typography="body3" style={{ marginLeft: 'auto' }}>
        {count}
      </Txt>
      <Txt typography="subTitle2" color={color} style={{ paddingLeft: size['3xs'] }}>
        {percentage}%
      </Txt>
    </div>
  );
};
