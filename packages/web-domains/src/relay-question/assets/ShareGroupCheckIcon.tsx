import { Interpolation, Theme } from '@emotion/react';

interface ShareGroupCheckIconProps {
  css?: Interpolation<Theme>;
}

export const ShareGroupCheckIcon = ({ css, ...rest }: ShareGroupCheckIconProps) => {
  return (
    <svg height="30" width="41" fill="none" viewBox="0 0 41 30" xmlns="http://www.w3.org/2000/svg" css={css} {...rest}>
      <path
        d="M3 14.0867L13.0343 25.5069C14.6496 27.3453 17.5223 27.3152 19.0987 25.4434L38 3"
        stroke="#FF7664"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  );
};
