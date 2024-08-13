import React, { HTMLAttributes } from 'react';

interface CircleKakaoProps extends HTMLAttributes<SVGElement> {}

export const CircleKakao = (props: CircleKakaoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="none" {...props}>
      <path fill="#FEE500" d="M0 40C0 17.909 17.909 0 40 0s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40Z" />
      <path
        fill="#000"
        d="M40 49.974c8.699 0 15.75-5.367 15.75-11.987S48.699 26 40 26c-8.698 0-15.75 5.367-15.75 11.987 0 4.388 3.098 8.225 7.721 10.314l-1.57 5.153c-.114.375.307.689.643.478l6.362-3.987a.428.428 0 0 0 .125-.118c.804.096 1.629.147 2.469.147Z"
      />
    </svg>
  );
};
