import { css } from '@emotion/react';
import { colors, borderRadiusVariants } from '@sambad/sds/theme';

export interface inputCssProps {
  error: boolean;
  requried: boolean;
}

export const textFieldCss = css({
  display: 'flex',
  flexDirection: 'column',
});

export const inputCss = (error: boolean | undefined) =>
  css({
    display: 'block',
    width: '100%',
    backgroundColor: colors.grey200,
    border: `1px solid ${error ? colors.primary500 : colors.grey400}`,
    padding: '12px 16px',
    borderRadius: borderRadiusVariants.medium,
    outline: 'none',
    ':focus': { borderColor: colors.grey600 },
  });
