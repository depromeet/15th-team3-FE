import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

import { CheckboxGroupImpl, useCheckboxContext } from './CheckboxGroupImpl';
import { checkboxCss } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  label: string;
  required?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, label, value, required, ...restProps } = props;

  const checkboxCtx = useCheckboxContext();

  const isChecked = checkboxCtx.value?.includes(value);

  const checkboxId = `${useId()}-${label}`;

  return (
    <label htmlFor={checkboxId} css={[checkboxCss.base, isChecked ? checkboxCss.selected : checkboxCss.default]}>
      <Txt typography="subTitle2" color={isChecked ? colors.primary500 : colors.black}>
        {label}
      </Txt>
      {children}
      <input
        id={checkboxId}
        ref={ref}
        value={value}
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        required={required}
        onChange={(event) => {
          if (event.target.checked) {
            checkboxCtx.handleItemCheck(value);
          } else {
            checkboxCtx.handleItemUncheck(value);
          }
        }}
        {...restProps}
        css={{ display: 'none' }}
      />
    </label>
  );
});

Checkbox.displayName = 'CheckboxGroup.item';

export const CheckboxGroup = Object.assign(CheckboxGroupImpl, {
  Item: Checkbox,
});
