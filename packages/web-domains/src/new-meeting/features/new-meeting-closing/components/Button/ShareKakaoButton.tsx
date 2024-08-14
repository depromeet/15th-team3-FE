import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';

import { CircleKakao } from '@/new-meeting/common/assets/icons/CircleKakao';
import { generateKakaoShareParams, kakaoShare } from '@/new-meeting/common/utils/kakaoShare';

interface shareKakaoButtonProps {
  inviteCode?: string;
}

const ShareKakaoButton = (props: shareKakaoButtonProps) => {
  const { inviteCode } = props;

  if (!inviteCode) {
    return null;
  }

  const kakaoShareParams: generateKakaoShareParams = {
    description: '삼봤드의 모험 모임에 여러분들을 초대합니다',
    imageUrl: 'https://file.moring.one/defaults/invite_narrow.png',
    shareLink: `${window.location.origin}/meeting/participate/closing?inviteCode=${inviteCode}`,
  };

  return (
    <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
      <CircleKakao onClick={() => kakaoShare(kakaoShareParams)} />
      <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
        카카오톡 공유
      </Txt>
    </div>
  );
};

export default ShareKakaoButton;
