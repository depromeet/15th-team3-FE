import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import CopyToClipboard from 'react-copy-to-clipboard';

import { getWebDomain } from '@/common';
import { CircleCopy } from '@/new-meeting/common/assets/icons/CircleCopy';
import { useToast } from '@/new-meeting/common/components/Toast/ToastProvider';

import { CopyToast } from '../CopyToast';

interface InviteLinkShareButtonProps {
  inviteCode?: string;
}

export const InviteLinkShareButton = (props: InviteLinkShareButtonProps) => {
  const { inviteCode } = props;
  const domain = getWebDomain();

  if (!inviteCode) {
    return null;
  }

  const { addToast } = useToast();

  const handleCopyUrl = () => {
    addToast(() => CopyToast({ content: '링크를 복사했어요!' }));
  };

  const copyUrl = `${domain}/meeting/participate/closing?inviteCode=${inviteCode}`;

  return (
    <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
      <CopyToClipboard text={copyUrl} onCopy={handleCopyUrl}>
        <CircleCopy style={{ cursor: 'pointer' }} />
      </CopyToClipboard>
      <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
        링크 복사
      </Txt>
    </div>
  );
};
