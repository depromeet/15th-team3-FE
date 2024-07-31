import { Icon } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';

export const FallbackThumbnail = () => {
  const style = {
    backgroundColor: colors.grey500,
    borderRadius: borderRadiusVariants.medium,
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <span style={style}>
      <Icon name="landscape" color={colors.grey600} />
    </span>
  );
};
