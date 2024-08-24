import { forwardRef, HTMLAttributes } from 'react';

import { spinnerAnimationCss } from './styles.ts';

export interface SpinnerProps extends HTMLAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => {
  const { size = 20, color = '#8E8E8E', ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={spinnerAnimationCss}
      ref={ref}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6538 0.955217C9.6538 1.5075 10.1038 1.94866 10.6518 2.01686C14.5991 2.50808 17.6538 5.87491 17.6538 9.95522C17.6538 14.3735 14.0721 17.9552 9.6538 17.9552C7.80416 17.9552 6.10113 17.3275 4.74612 16.2735C4.31019 15.9344 3.68036 15.9287 3.28984 16.3192C2.89931 16.7097 2.89644 17.3473 3.3238 17.6971C5.04786 19.1084 7.25194 19.9552 9.6538 19.9552C15.1766 19.9552 19.6538 15.4781 19.6538 9.95522C19.6538 4.76939 15.7064 0.505529 10.6524 0.00445341C10.1028 -0.0500354 9.6538 0.402932 9.6538 0.955217Z"
        fill={color}
      />
    </svg>
  );
});

Spinner.displayName = 'Spinner';
