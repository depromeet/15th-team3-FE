import { Button, Icon } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { useDialogContext } from '@/common/contexts/DialogProvider';

export const ShareButton = () => {
  const { open } = useDialogContext();

  return (
    <Button size="large" onClick={open}>
      <Icon name="share-icon" color={colors.white} css={{ marginRight: '8px' }} />
      질문 공유하기
    </Button>
  );
};
