import { IconAssetProps } from '../types';

export const CheckIconMeet = (props: IconAssetProps) => {
  const { size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3565 6.93587C19.7814 7.28876 19.8397 7.91923 19.4868 8.34407L12.9524 16.2108C11.8035 17.5938 9.70442 17.6627 8.46745 16.3578L4.55746 12.2331C4.17751 11.8323 4.19442 11.1993 4.59524 10.8194C4.99606 10.4394 5.62899 10.4563 6.00895 10.8571L9.91894 14.9818C10.3313 15.4168 11.031 15.3939 11.4139 14.9328L17.9483 7.06614C18.3012 6.6413 18.9317 6.58298 19.3565 6.93587Z"
        fill="#FF7664"
      />
    </svg>
  );
};
