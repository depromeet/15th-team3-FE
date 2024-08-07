import { css } from '@emotion/react';
import { colors, borderRadiusVariants } from '@sambad/sds/theme';
import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';

interface InviteCodeInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InviteCodeInput = forwardRef<HTMLInputElement, PropsWithChildren<InviteCodeInputProps>>((props, ref) => {
  return <input css={inputCss} type="text" ref={ref} {...props} />;
});

InviteCodeInput.displayName = 'InviteCodeInput';

export const inputCss = css({
  display: 'block',
  width: '100%',
  maxWidth: '238px',
  backgroundColor: colors.white,
  color: colors.grey600,
  border: `1px solid ${colors.grey400}`,
  padding: '12px 16px',
  borderRadius: borderRadiusVariants.medium,
  textAlign: 'center',
  outline: 'none',
  ':focus': { borderColor: colors.grey600 },
  '::placeholder': {
    color: colors.grey600,
  },
});
