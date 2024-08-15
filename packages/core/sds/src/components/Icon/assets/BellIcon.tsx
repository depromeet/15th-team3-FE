import { IconAssetProps } from '../types';

export const BellIcon = (props: IconAssetProps) => {
  const { color = 'white', size = 24 } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4773_9114)">
        <path
          d="M23.4305 13.6617L21.5305 6.82569C20.9736 4.82302 19.7632 3.06398 18.0918 1.82816C16.4204 0.592343 14.3839 -0.0493232 12.3059 0.00515695C10.228 0.0596371 8.22788 0.807137 6.62353 2.12884C5.01919 3.45054 3.90267 5.27059 3.45147 7.29969L1.98047 13.9147C1.81799 14.6456 1.82174 15.4037 1.99146 16.133C2.16118 16.8623 2.49253 17.5442 2.96105 18.1282C3.42957 18.7123 4.02329 19.1837 4.69838 19.5076C5.37347 19.8316 6.11269 19.9997 6.86147 19.9997H7.97547C8.20499 21.13 8.8182 22.1462 9.71121 22.8761C10.6042 23.606 11.7221 24.0047 12.8755 24.0047C14.0288 24.0047 15.1467 23.606 16.0397 22.8761C16.9327 22.1462 17.546 21.13 17.7755 19.9997H18.6135C19.3843 19.9997 20.1447 19.8216 20.8352 19.4791C21.5258 19.1367 22.1278 18.6392 22.5943 18.0256C23.0608 17.4119 23.379 16.6987 23.5243 15.9417C23.6695 15.1847 23.6377 14.4044 23.4315 13.6617H23.4305ZM12.8755 21.9997C12.2572 21.9971 11.6548 21.8036 11.1508 21.4456C10.6467 21.0876 10.2656 20.5826 10.0595 19.9997H15.6915C15.4854 20.5826 15.1042 21.0876 14.6002 21.4456C14.0961 21.8036 13.4937 21.9971 12.8755 21.9997ZM21.0015 16.8147C20.7228 17.1844 20.3618 17.4839 19.9471 17.6897C19.5324 17.8954 19.0754 18.0015 18.6125 17.9997H6.86147C6.41225 17.9996 5.96879 17.8987 5.56381 17.7043C5.15883 17.5099 4.80268 17.227 4.52163 16.8766C4.24059 16.5261 4.04183 16.1171 3.94003 15.6795C3.83823 15.242 3.83599 14.7872 3.93347 14.3487L5.40347 7.73269C5.75782 6.1389 6.63478 4.70929 7.89493 3.67114C9.15508 2.63298 10.7261 2.04586 12.3582 2.0031C13.9904 1.96035 15.59 2.46441 16.9028 3.43516C18.2156 4.40591 19.1662 5.78764 19.6035 7.36069L21.5035 14.1967C21.629 14.6421 21.649 15.1106 21.5619 15.565C21.4747 16.0195 21.2829 16.4473 21.0015 16.8147Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4773_9114">
          <rect width={size} height={size} fill={color} transform="translate(0.875)" />
        </clipPath>
      </defs>
    </svg>
  );
};
