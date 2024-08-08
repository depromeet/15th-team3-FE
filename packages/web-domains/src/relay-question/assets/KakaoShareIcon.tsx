import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes } from 'react';

interface KakaoShareIconProps extends HTMLAttributes<SVGSVGElement> {
  css?: Interpolation<Theme>;
}

export const KakaoShareIcon = ({ css, ...rest }: KakaoShareIconProps) => {
  return (
    <svg height="80" width="80" fill="none" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" css={css} {...rest}>
      <path
        d="M0 40C0 17.9086 17.9086 0 40 0V0C62.0914 0 80 17.9086 80 40V40C80 62.0914 62.0914 80 40 80V80C17.9086 80 0 62.0914 0 40V40Z"
        fill="#FEE500"
      />
      <path
        d="M40 49.9736C48.6985 49.9736 55.75 44.6069 55.75 37.9868C55.75 31.3667 48.6985 26 40 26C31.3015 26 24.25 31.3667 24.25 37.9868C24.25 42.375 27.3484 46.2125 31.971 48.3013L30.4016 53.4538C30.2873 53.8292 30.7079 54.1427 31.0437 53.9323L37.4055 49.9454C37.4576 49.9127 37.4992 49.8723 37.5306 49.8271C38.3351 49.9235 39.1599 49.9736 40 49.9736Z"
        fill="black"
      />
    </svg>
  );
};
