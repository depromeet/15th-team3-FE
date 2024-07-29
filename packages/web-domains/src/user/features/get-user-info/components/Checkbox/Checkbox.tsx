import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes } from 'react';

import { radioCss } from '../Radio/styled';

import { useCheckboxActions, useCheckboxState } from './CheckboxGroup';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  label: string;
  required?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, label, value, required, ...restProps } = props;

  const stateCtx = useCheckboxState();
  const actionCtx = useCheckboxActions();

  const isChecked = stateCtx.value?.includes(value);

  return (
    <label htmlFor={label} css={[radioCss.base, isChecked ? radioCss.selected : radioCss.default]}>
      <Txt typography="subTitle2" color={isChecked ? colors.primary500 : colors.black}>
        {label}
      </Txt>
      {children}
      <input
        id={label}
        ref={ref}
        value={value}
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        required={required}
        onChange={(event) => {
          if (event.target.checked) {
            actionCtx.handleItemCheck(value);
          } else {
            actionCtx.handleItemUncheck(value);
          }
        }}
        {...restProps}
        css={{ display: 'none' }}
      />
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
