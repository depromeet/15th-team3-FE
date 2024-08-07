import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CircleCopy } from '@/new-meeting/common/assets/icons/CircleCopy';
import { useToast } from '@/new-meeting/common/components/Toast/ToastProvider';

import { CopyToast } from '../CopyToast';

export const InviteLinkShareButton = ({ inviteCode }: { inviteCode: string | null }) => {
  const { addToast } = useToast();

  const handleCopyUrl = () => {
    addToast(() => CopyToast({ content: '링크가 복사되었습니다.' }));
  };

  if (!inviteCode) {
    return null;
  }

  return (
    <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
      <CopyToClipboard text={`/meeting/join?inviteCode=${inviteCode}`} onCopy={handleCopyUrl}>
        <div>
          <CircleCopy />
          <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
            링크 복사
          </Txt>
        </div>
      </CopyToClipboard>
    </div>
  );
};
