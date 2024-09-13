import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { inputCss, textInputcss } from './styles';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hintMessage?: string;
  answerNumber: string | number;
  error?: FieldError;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { maxLength, label, hintMessage, answerNumber, onChange, error, ...restProps } = props;

  const formattedAnswerNumber = answerNumber.toString().padStart(2, '0');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
      return;
    }
    onChange && onChange(event);
  };

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
      <input ref={ref} css={inputCss(!!error)} onChange={handleChange} {...restProps} />
      {hintMessage && (
        <Txt as="p" typography="body4" color={error ? colors.primary500 : colors.grey600}>
          {hintMessage}
        </Txt>
      )}
      {!hintMessage && error && (
        <Txt as="p" typography="body4" color={colors.primary500}>
          {error?.message}
        </Txt>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';
