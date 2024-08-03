import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { CopyLinkIcon } from '../../../../assets/CopyLinkIcon';

import { wrapperCss } from './CopyLink.styles';

export const CopyLink = () => {
  return (
    <div css={wrapperCss}>
      <CopyLinkIcon />
      <Txt color={colors.grey700} typography="title4" fontWeight="medium">
        링크 복사
      </Txt>
    </div>
  );
};
