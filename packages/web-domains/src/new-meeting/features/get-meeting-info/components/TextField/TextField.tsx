import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { ChangeEvent, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';

import { textFieldCss, inputCss } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>((props, ref) => {
  const { onChange, error, errorMessage, maxLength, ...restProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    onChange && onChange(event);
  };

  return (
    <div css={textFieldCss}>
      <input css={inputCss(error)} type="text" ref={ref} onChange={handleChange} maxLength={maxLength} {...restProps} />
      {errorMessage && (
        <Txt
          as="p"
          typography="body4"
          color={error ? colors.primary500 : colors.grey600}
          css={{ marginTop: size['7xs'] }}
        >
          {errorMessage}
        </Txt>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';
