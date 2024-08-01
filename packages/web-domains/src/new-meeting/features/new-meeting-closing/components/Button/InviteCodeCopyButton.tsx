import { Button, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyIcon } from '@/new-meeting/common/assets/icons/Copy';

import { CopyToast } from '../CopyToast';
import { useToast } from '../Toast/ToastProvider';

interface InviteCodeCopyButtonProps {
  inviteCode?: string;
}
export const InviteCodeCopyButton = (props: InviteCodeCopyButtonProps) => {
  const { inviteCode = '0AF781' } = props;

  if (!inviteCode) {
    return null;
  }

  const { addToast } = useToast();

  const handleOpenToast = () => {
    addToast(() => CopyToast({ content: '코드를 복사했어요!' }), 'info');
  };

  return (
    <CopyToClipboard text={inviteCode} onCopy={handleOpenToast}>
      <Button
        variant="sub"
        size="medium"
        css={{
          marginTop: '6px',
          width: 'auto',
          height: '53px',
          padding: '14px 46px',
          borderRadius: borderRadiusVariants.medium,
        }}
      >
        <CopyIcon />
        <Txt typography="subtitle1" color={colors.black} css={{ marginLeft: size['6xs'] }}>
          {inviteCode}
        </Txt>
      </Button>
    </CopyToClipboard>
  );
};
