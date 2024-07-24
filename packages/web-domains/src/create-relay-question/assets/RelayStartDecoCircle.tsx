import { Interpolation, Theme } from '@emotion/react';

interface RelayStartDecoCircleProps {
  size?: number;
  css?: Interpolation<Theme>;
}

export const RelayStartDecoCircle = ({ size = 5, css }: RelayStartDecoCircleProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" css={css}>
      <circle cx="2.5" cy="2.5" r="2.5" fill="#FDE582" />
    </svg>
  );
};
