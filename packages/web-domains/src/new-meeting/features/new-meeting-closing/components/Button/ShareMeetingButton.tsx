import { Button, Icon } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ButtonHTMLAttributes } from 'react';

interface ShareMeetingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ShareMeetingButton = (props: ShareMeetingButtonProps) => {
  const { onClick, ...restProps } = props;

  return (
    <Button size="large" {...restProps} onClick={onClick}>
      <Icon name="share-icon" color={colors.white} css={{ marginRight: '8px' }} />
      모임 공유하기
    </Button>
  );
};
