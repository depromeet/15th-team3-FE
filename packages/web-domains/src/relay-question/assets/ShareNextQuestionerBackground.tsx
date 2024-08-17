import { Interpolation, Theme } from '@emotion/react';

interface ShareNextQuestionerBackgroundProps {
  css?: Interpolation<Theme>;
}

export const ShareNextQuestionerBackground = ({ css, ...rest }: ShareNextQuestionerBackgroundProps) => {
  return (
    <svg
      width="274"
      height="186"
      viewBox="0 0 274 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
      {...rest}
    >
      <ellipse cx="60" cy="172.5" rx="60" ry="13.5" fill="#FFD7C1" />
      <path
        d="M86.4375 151C84.7 155.095 81.7006 164.02 83.6026 166.954C85.5047 169.887 89.692 169.812 91.5479 169.407"
        stroke="#4B4B4B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M94.5833 169.907C94.8592 166.594 88.639 165.638 84.3558 165.708C83.302 165.726 82.2873 166.223 81.8032 167.159C80.637 169.415 80.7343 172.086 82.9156 173.102C85.5621 174.335 94.3435 172.787 94.5833 169.907Z"
        fill="#4B4B4B"
      />
      <path
        d="M127.999 93.7636C133.091 91.3121 144.31 83.8393 148.447 73.5602"
        stroke="#4B4B4B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="73.5" cy="97.5" r="58.5" fill="#FFA18A" />
      <path d="M88.6484 91.1973L101.99 98.0069L112.392 87.2288" stroke="#1F1F1F" strokeWidth="3.56635" />
      <circle cx="115.863" cy="81.9843" r="4.74324" transform="rotate(-9.48872 115.863 81.9843)" fill="white" />
      <circle cx="83.8939" cy="87.3261" r="4.74324" transform="rotate(-9.48872 83.8939 87.3261)" fill="white" />
      <circle cx="109.552" cy="74.7323" r="4.45794" transform="rotate(-9.48872 109.552 74.7323)" fill="#1F1F1F" />
      <circle cx="87.7178" cy="78.3827" r="4.45794" transform="rotate(-9.48872 87.7178 78.3827)" fill="#1F1F1F" />
      <path
        d="M46.0002 109.825C49.5422 114.229 59.3635 123.462 70.3128 125.161"
        stroke="#4B4B4B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32.0369 161.722C35.3551 161.928 36.1782 155.688 36.0166 151.408C35.9769 150.355 35.4581 149.351 34.5118 148.887C32.232 147.769 29.5635 147.923 28.5938 150.125C27.4171 152.797 29.1522 161.544 32.0369 161.722Z"
        fill="#4B4B4B"
      />
      <path
        d="M55 147C53.2202 150.325 48.3464 156.765 43.0893 155.925C36.5179 154.875 36.1071 149.1 32 150.675"
        stroke="#4B4B4B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M216.24 27.8778L273.017 7.32126L219.761 48.3191L216.24 27.8778Z" fill="#FF7664" />
      <path d="M244.438 47.7253L225.656 34.3281L273.018 7.3218L244.438 47.7253Z" fill="#FFBBA2" />
      <path d="M219.761 48.3175L225.654 34.3259L232.23 38.99L219.761 48.3175Z" fill="#DB4E49" />
      <path d="M196.96 14.4308L273.017 7.32015L216.239 27.8767L196.96 14.4308Z" fill="#FFBBA2" />
      <path
        d="M214.025 49.0399C202.92 53.1946 182.098 64.6148 187.647 77.0571C194.585 92.61 212.865 89.102 211.21 76.5542C209.555 64.0063 163.353 67.5381 179.852 95.2347"
        stroke="#E1E1E1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
