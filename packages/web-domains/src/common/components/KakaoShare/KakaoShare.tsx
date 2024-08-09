import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { KakaoShareOpenGraphKeyType, generateKakaoShare } from './generateKakaoShare.utils';
import { wrapperCss } from './KakaoShare.styles';
import { KakaoShareIcon } from './KakaoShareIcon';

interface ShareKakaoProps {
  openGraphKey: KakaoShareOpenGraphKeyType;
  questionId: number;
  questionerName: string;
}

export const ShareKakaoButton = ({ openGraphKey, questionId, questionerName }: ShareKakaoProps) => {
  return (
    <div css={wrapperCss}>
      <KakaoShareIcon onClick={() => generateKakaoShare({ openGraphKey, questionId, questionerName })} />
      <Txt color={colors.grey700} typography="title4" fontWeight="medium">
        카카오톡 공유
      </Txt>
    </div>
  );
};
