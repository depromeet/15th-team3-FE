import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { KakaoShareIcon } from '../../../../assets/KakaoShareIcon';
import { KakaoShareOpenGraphKeyType, shareToKakao } from '../../../../utils/shareToKakao';

import { wrapperCss } from './ShareKakao.styles';

interface ShareKakaoProps {
  openGraphKey: KakaoShareOpenGraphKeyType;
  questionId: number;
  questionerName: string;
}

export const ShareKakao = ({ openGraphKey, questionId, questionerName }: ShareKakaoProps) => {
  return (
    <div css={wrapperCss}>
      <KakaoShareIcon onClick={() => shareToKakao({ openGraphKey, questionId, questionerName })} />
      <Txt color={colors.grey700} typography="title4" fontWeight="medium">
        카카오톡 공유
      </Txt>
    </div>
  );
};
