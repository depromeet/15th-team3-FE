'use client';

import { Button } from '@sds/components';
import { colors } from '@sds/theme';
import { Attributes, HTMLAttributes } from 'react';

interface CommentButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

export const CommentButton = ({ disabled, onClick, loading = false, ...rest }: CommentButtonProps) => {
  const buttonStyles: Attributes['css'] = {
    backgroundColor: disabled ? colors.grey600 : colors.black,
    cursor: disabled ? 'none' : 'pointer',
  };

  const handleAnswer = () => {
    if (disabled) {
      return;
    }
    onClick?.();
  };

  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <Button size="large" {...rest} css={buttonStyles} onClick={handleAnswer} loading={loading}>
        답변 보내기
      </Button>
    </div>
  );
};
