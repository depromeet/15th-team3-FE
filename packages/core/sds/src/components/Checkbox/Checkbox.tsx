import { useId } from '@sambad/react-utils';
import { CSSProperties, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { useControllableState } from '@sds/hooks';
import { colors } from '@sds/theme';
import { composeEventHandlers } from '@sds/utils';

import { Icon } from '../Icon';
import { Txt } from '../Typography';

import { checkboxRootCss, checkedVariants, iconCss, indicatorCss, inputCss, labelCss } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    checked: checkedFromProps,
    defaultChecked,
    onCheckedChange,
    disabled,
    style: styleFromProps,
    ...restProps
  } = props;

  const id = useId();

  const [checked = false, setChecked] = useControllableState({
    prop: checkedFromProps,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });

  const rootStyle = {
    ...checkedVariants[checked ? 'checked' : 'default'],
    ...styleFromProps,
  } as CSSProperties;

  return (
    <div css={checkboxRootCss} style={rootStyle} {...restProps}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        role="checkbox"
        checked={checked}
        disabled={disabled}
        onClick={composeEventHandlers(props.onClick, () => {
          setChecked((prev) => !prev);
        })}
        css={inputCss}
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={0}
      />
      <span css={indicatorCss} />
      {checked && <Icon css={iconCss} name="check" size={12} color={colors.white} />}
      {label != null && (
        <Txt typography="subtitle1" css={labelCss}>
          <label htmlFor={id}>{label}</label>
        </Txt>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
