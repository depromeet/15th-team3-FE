import { HTMLAttributes } from 'react';

interface CircleCopyProps extends HTMLAttributes<SVGElement> {}

export const CircleCopy = (props: CircleCopyProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="none" {...props}>
      <path fill="#F5F5F5" d="M0 40C0 17.909 17.909 0 40 0s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40Z" />
      <g fill="#4B4B4B" clipPath="url(#a)">
        <path d="M37.874 52.793A7.542 7.542 0 0 1 27.208 42.13l6.393-6.398-2.123-2.12-6.391 6.397A10.542 10.542 0 0 0 40 54.914l6.393-6.393-2.121-2.12-6.398 6.392ZM54.916 25.091A10.47 10.47 0 0 0 47.462 22a10.476 10.476 0 0 0-7.452 3.085l-6.4 6.395 2.12 2.122 6.398-6.392A7.49 7.49 0 0 1 47.46 25a7.542 7.542 0 0 1 5.331 12.874l-6.393 6.393 2.123 2.123L54.913 40a10.556 10.556 0 0 0 .003-14.909Z" />
        <path d="M44.268 33.612 33.61 44.27l2.122 2.12 10.656-10.656-2.121-2.12Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M22 22h36v36H22z" />
        </clipPath>
      </defs>
    </svg>
  );
};
