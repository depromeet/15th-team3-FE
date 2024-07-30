'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes } from 'react';

import { RadioGroupImpl, useRadioContext } from './RadioGroupImpl';
import { radioCss } from './styled';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, label, value, ...restProps } = props;

  const { value: checkedValue, onChange: handleChange } = useRadioContext();

  const isChecked = checkedValue === value;

  return (
    <label htmlFor={label} css={[radioCss.base, isChecked ? radioCss.selected : radioCss.default]}>
      <Txt typography="subTitle2" color={isChecked ? colors.primary500 : colors.black}>
        {label}
      </Txt>
      {children}
      <input
        css={{ display: 'none' }}
        type="radio"
        id={label}
        ref={ref}
        value={value}
        checked={isChecked}
        aria-checked={isChecked}
        aria-label={label}
        onChange={(event) => handleChange(event.target.value)}
        {...restProps}
      />
    </label>
  );
});

Radio.displayName = 'RadioGroup.item';

export const RadioGroup = Object.assign(RadioGroupImpl, {
  Item: Radio,
});
