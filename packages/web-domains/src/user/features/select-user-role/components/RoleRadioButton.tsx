import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface RoleRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subTitle: string;
  checkedValue: string;
  color: string;
}

export const RoleRadioButton = (props: PropsWithChildren<RoleRadioButtonProps>) => {
  const { label, value, subTitle, checkedValue, color, onChange, children } = props;

  const isChecked = checkedValue === value;

  return (
    <label
      css={[
        {
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: colors.grey200,
          padding: '40px',
          borderRadius: borderRadiusVariants.medium,
          opacity: checkedValue ? (isChecked ? 1 : 0.5) : 1,
          transition: 'opacity 0.3s ease',
          '& + label': {
            marginTop: '16px',
          },
        },
        isChecked && {
          backgroundColor: color,
          'svg *': {
            fill: colors.white,
          },
        },
      ]}
    >
      {children}
      <Txt as="p" typography="title2" color={colors.grey700}>
        {subTitle}
      </Txt>
      <Txt as="p" typography="heading2" color={colors.black}>
        {label}
      </Txt>
      <input type="radio" checked={isChecked} value={value} onChange={onChange} css={{ display: 'none' }} />
    </label>
  );
};
