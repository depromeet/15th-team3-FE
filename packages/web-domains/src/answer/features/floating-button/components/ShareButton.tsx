import { Button, Icon } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

export const ShareButton = () => {
  return (
    <Button>
      <Icon name="share-icon" color={colors.white} css={{ marginRight: '8px' }} />
      질문 공유하기
    </Button>
  );
};
