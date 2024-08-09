'use client';

import { Button } from '@sds/components';
import { colors } from '@sds/theme';
import { Attributes, HTMLAttributes } from 'react';

interface CommentButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  disabled?: boolean;
  onClick?: () => void;
}

export const CommentButton = ({ disabled, onClick, ...rest }: CommentButtonProps) => {
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
      <Button {...rest} css={buttonStyles} onClick={handleAnswer}>
        답변 보내기
      </Button>
    </div>
  );
};
