import { ChangeEvent, TextareaHTMLAttributes, forwardRef } from 'react';

import { textAreaCss } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { maxLength = 3000, onChange, ...restProps } = props;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    onChange && onChange(event);
  };

  return (
    <textarea
      placeholder="저는 이런 사람이에요."
      ref={ref}
      css={textAreaCss}
      onChange={handleChange}
      {...restProps}
    ></textarea>
  );
});

TextArea.displayName = 'TextArea';
