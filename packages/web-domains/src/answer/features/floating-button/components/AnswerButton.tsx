'use client';

import { Button } from '@sds/components';
import { colors } from '@sds/theme';
import { Attributes, HTMLAttributes } from 'react';

interface AnswerButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  disabled?: boolean;
  onClick?: () => void;
}

export const AnswerButton = ({ disabled, onClick, ...rest }: AnswerButtonProps) => {
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

  // const moveToComment = () => {
  //   push()
  // };

  return (
    <div css={{ position: 'fixed', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <Button size="large" {...rest} css={buttonStyles} onClick={handleAnswer}>
        다음
      </Button>
    </div>
  );
};
