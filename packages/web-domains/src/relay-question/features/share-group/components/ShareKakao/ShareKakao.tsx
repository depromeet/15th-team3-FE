import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { KakaoShareIcon } from '../../../../assets/KakaoShareIcon';

import { wrapperCss } from './ShareKakao.styles';

export const ShareKakao = () => {
  return (
    <div css={wrapperCss}>
      <KakaoShareIcon />
      <Txt color={colors.grey700} typography="title4" fontWeight="medium">
        카카오톡 공유
      </Txt>
    </div>
  );
};
