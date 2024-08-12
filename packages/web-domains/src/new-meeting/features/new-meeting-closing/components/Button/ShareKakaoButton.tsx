import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';

import { generateKakaoShare } from '@/common';
import { CircleKakao } from '@/new-meeting/common/assets/icons/CircleKakao';

const ShareKakaoButton = () => {
  return (
    <div
      css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}
      onClick={() => generateKakaoShare({ openGraphKey: 'inviteGroup' })}
    >
      <CircleKakao />
      <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
        카카오톡 공유
      </Txt>
    </div>
  );
};

export default ShareKakaoButton;
