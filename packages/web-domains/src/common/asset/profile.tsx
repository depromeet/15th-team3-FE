//TODO: 나중에 asset 패키지에 뺀다해서 따로 모아둠

import { Interpolation, Theme } from '@emotion/react';
import React from 'react';

interface ProfileImageProps {
  size?: number;
  css?: Interpolation<Theme>;
}

export const ProfileImage = ({ size = 48, css }: ProfileImageProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" css={css}>
      <g clipPath="url(#clip0_3074_4329)">
        <rect width="48" height="48" rx="24" fill="#4B4B4B" />
        <path
          d="M3.57183 35.6055C7.00243 48.4087 20.1625 56.0067 32.9657 52.5761C45.7689 49.1455 53.3669 35.9854 49.9363 23.1822C46.5057 10.379 33.3456 2.78105 20.5424 6.21166C7.7392 9.64226 0.141224 22.8023 3.57183 35.6055Z"
          fill="#FFA18A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.5377 25.5411C32.1469 26.796 31.3788 28.5299 31.1818 29.1999L29.8009 28.7939C30.0512 27.9427 30.935 25.951 32.5734 24.4725L33.5377 25.5411Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.6792 34.6641L24.2074 33.3251L29.3351 35.348L32.7643 31.0323L33.8912 31.9278L29.7987 37.0781L23.6792 34.6641Z"
          fill="black"
        />
        <path
          d="M36.3684 28.7429C36.6421 29.7642 36.036 30.8138 35.0148 31.0875C33.9936 31.3611 32.9439 30.7551 32.6703 29.7339C32.3966 28.7126 33.0027 27.6629 34.0239 27.3893C35.0451 27.1157 36.0948 27.7217 36.3684 28.7429Z"
          fill="white"
        />
        <path
          d="M23.7332 32.1277C24.0068 33.1489 23.4008 34.1986 22.3796 34.4722C21.3583 34.7459 20.3086 34.1398 20.035 33.1186C19.7614 32.0974 20.3674 31.0477 21.3886 30.7741C22.4099 30.5004 23.4596 31.1065 23.7332 32.1277Z"
          fill="white"
        />
        <path
          d="M24.4702 29.0097C24.7274 29.9695 24.1578 30.956 23.198 31.2132C22.2382 31.4704 21.2516 30.9008 20.9945 29.941C20.7373 28.9812 21.3069 27.9946 22.2667 27.7375C23.2265 27.4803 24.213 28.0499 24.4702 29.0097Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_3074_4329">
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
