import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { generateKakaoShare } from './generateKakaoShare.utils';
import { wrapperCss } from './KakaoShare.styles';
import { KakaoShareIcon } from './KakaoShareIcon';

interface ShareKakaoProps {
  shareImageUrl: string;
  shareDescription: string;
  shareLink: string;
}

export const ShareKakaoButton = ({ shareImageUrl, shareDescription, shareLink }: ShareKakaoProps) => {
  return (
    <div css={wrapperCss}>
      <KakaoShareIcon onClick={() => generateKakaoShare({ shareImageUrl, shareDescription, shareLink })} />
      <Txt color={colors.grey700} typography="title4" fontWeight="medium">
        카카오톡 공유
      </Txt>
    </div>
  );
};
