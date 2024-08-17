import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes } from 'react';

import { inputCss, textInputcss } from './styles';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  answerNumber: string | number;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, errorMessage, answerNumber, ...restProps } = props;

  const formattedAnswerNumber = answerNumber.toString().padStart(2, '0');

  return (
    <div css={textInputcss}>
      <label>
        <Txt color="black" typography="subtitle1">
          <Txt as="strong" color={colors.primary500} typography="subtitle1" css={{ marginRight: size['6xs'] }}>
            #{formattedAnswerNumber}
          </Txt>
          {label}
        </Txt>
      </label>
      <input ref={ref} css={inputCss} {...restProps} />
      {errorMessage && (
        <Txt as="p" typography="body4" color={colors.grey600}>
          {errorMessage}
        </Txt>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';
