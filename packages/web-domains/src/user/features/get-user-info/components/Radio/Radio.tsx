'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';

import { RadioGroupImpl, useRadioContext } from './RadioGroupImpl';
import { RadioLabel } from './RadioLabel';
import { radioCss } from './styles';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ((isChecked?: boolean) => ReactNode);
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, label, value, ...restProps } = props;

  const { value: checkedValue, onChange: handleChange } = useRadioContext();

  const isChecked = checkedValue === value;

  const radioId = useId();

  return (
    <label htmlFor={radioId} css={[radioCss.base, isChecked ? radioCss.selected : radioCss.default]}>
      {typeof label === 'string' ? (
        <Txt typography="body3" color={isChecked ? colors.primary500 : colors.black}>
          {label}
        </Txt>
      ) : (
        label(isChecked)
      )}
      {children}
      <input
        css={{ display: 'none' }}
        type="radio"
        id={radioId}
        ref={ref}
        value={value}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={(event) => handleChange(event.target.value)}
        {...restProps}
      />
    </label>
  );
});

Radio.displayName = 'RadioGroup.item';

export const RadioGroup = Object.assign(RadioGroupImpl, {
  Item: Radio,
  Label: RadioLabel,
});
