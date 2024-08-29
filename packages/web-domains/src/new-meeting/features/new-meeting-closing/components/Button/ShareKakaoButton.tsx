import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { generateKakaoShare, getWebDomain } from '@/common';
import { CircleKakao } from '@/new-meeting/common/assets/icons/CircleKakao';

interface shareKakaoButtonProps {
  inviteCode?: string;
  name?: string;
}

const ShareKakaoButton = (props: shareKakaoButtonProps) => {
  const { inviteCode, name } = props;
  const domain = getWebDomain();

  if (!inviteCode) {
    return null;
  }

  const handleGenerateKakaoShare = () => {
    generateKakaoShare({
      shareDescription: `${name} 모임에 여러분들을 초대합니다`,
      shareImageUrl: 'https://file.moring.one/defaults/invite_narrow.png',
      shareLink: `${domain}/meeting/participate/closing?inviteCode=${inviteCode}`,
    });
  };

  return (
    <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
      <CircleKakao onClick={handleGenerateKakaoShare} style={{ cursor: 'pointer' }} />
      <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
        카카오톡 공유
      </Txt>
    </div>
  );
};

export default ShareKakaoButton;
