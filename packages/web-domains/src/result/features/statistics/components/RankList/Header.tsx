'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { headerCss } from './styles';

export const RankListHeader = () => {
  return (
    <div css={headerCss}>
      <Txt typography="body4" color={colors.grey700}>
        선택지
      </Txt>
      <Txt typography="body4" color={colors.grey700} style={{ marginLeft: 'auto' }}>
        득표수
      </Txt>
      <Txt typography="body4" color={colors.grey700} style={{ paddingLeft: size['3xs'] }}>
        비율
      </Txt>
    </div>
  );
};
