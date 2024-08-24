import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes } from 'react';

interface RelayToolTipPolygonProps extends HTMLAttributes<SVGSVGElement> {
  css?: Interpolation<Theme>;
}

export const RelayToolTipPolygon = ({ css, ...rest }: RelayToolTipPolygonProps) => {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" css={css} {...rest}>
      <path
        d="M13.8387 15.9401C12.2577 18.3361 8.74228 18.3361 7.1613 15.9401L0.736494 6.20297C-1.01827 3.54354 0.889009 0 4.07519 0H16.9248C20.111 0 22.0183 3.54354 20.2635 6.20297L13.8387 15.9401Z"
        fill="#FF7664"
      />
    </svg>
  );
};
