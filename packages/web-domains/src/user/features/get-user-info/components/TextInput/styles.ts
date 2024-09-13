import { css } from '@emotion/react';
import { colors, borderRadiusVariants, size } from '@sambad/sds/theme';

export const inputCss = (error?: boolean) =>
  css({
    display: 'block',
    width: '100%',
    backgroundColor: colors.grey200,
    border: `1px solid ${error ? colors.primary500 : colors.grey400}`,
    padding: '12px 16px',
    borderRadius: borderRadiusVariants.medium,
    ':focus': { borderColor: colors.grey600 },
    outline: 'none',
  });

export const textInputcss = css({
  display: 'flex',
  flexDirection: 'column',
  '& > *:not(:first-child)': { marginTop: size['6xs'] },
});

export const textAreaCss = css({
  width: '100%',
  height: '200px',
  padding: '12px 16px',
  backgroundColor: colors.grey200,
  border: `1px solid ${colors.grey400}`,
  borderRadius: borderRadiusVariants.medium,
  ':focus': { borderColor: colors.grey600 },
  outline: 'none',
});
