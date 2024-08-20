import { IconAssetProps } from '../types';

export const Stats = (props: IconAssetProps) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="fi-rr-stats" clipPath="url(#clip0_5037_8450)">
        <path
          id="Vector"
          d="M19.6667 18.3333H3C2.77899 18.3333 2.56702 18.2455 2.41074 18.0893C2.25446 17.933 2.16667 17.721 2.16667 17.5V0.833333C2.16667 0.61232 2.07887 0.400358 1.92259 0.244078C1.76631 0.0877974 1.55435 0 1.33333 0C1.11232 0 0.900358 0.0877974 0.744078 0.244078C0.587797 0.400358 0.5 0.61232 0.5 0.833333L0.5 17.5C0.5 18.163 0.763392 18.7989 1.23223 19.2678C1.70107 19.7366 2.33696 20 3 20H19.6667C19.8877 20 20.0996 19.9122 20.2559 19.7559C20.4122 19.5996 20.5 19.3877 20.5 19.1667C20.5 18.9457 20.4122 18.7337 20.2559 18.5774C20.0996 18.4211 19.8877 18.3333 19.6667 18.3333Z"
          fill={color}
        />
        <path
          id="Vector_2"
          d="M13.0003 16.668C13.2213 16.668 13.4333 16.5802 13.5896 16.4239C13.7459 16.2676 13.8337 16.0556 13.8337 15.8346V10.0013C13.8337 9.78029 13.7459 9.56833 13.5896 9.41205C13.4333 9.25577 13.2213 9.16797 13.0003 9.16797C12.7793 9.16797 12.5674 9.25577 12.4111 9.41205C12.2548 9.56833 12.167 9.78029 12.167 10.0013V15.8346C12.167 16.0556 12.2548 16.2676 12.4111 16.4239C12.5674 16.5802 12.7793 16.668 13.0003 16.668Z"
          fill={color}
        />
        <path
          id="Vector_3"
          d="M6.33333 16.668C6.55435 16.668 6.76631 16.5802 6.92259 16.4239C7.07887 16.2676 7.16666 16.0556 7.16666 15.8346V10.0013C7.16666 9.78029 7.07887 9.56833 6.92259 9.41205C6.76631 9.25577 6.55435 9.16797 6.33333 9.16797C6.11232 9.16797 5.90036 9.25577 5.74408 9.41205C5.5878 9.56833 5.5 9.78029 5.5 10.0013V15.8346C5.5 16.0556 5.5878 16.2676 5.74408 16.4239C5.90036 16.5802 6.11232 16.668 6.33333 16.668Z"
          fill={color}
        />
        <path
          id="Vector_4"
          d="M16.3333 16.6667C16.5544 16.6667 16.7663 16.5789 16.9226 16.4226C17.0789 16.2663 17.1667 16.0543 17.1667 15.8333V5.83333C17.1667 5.61232 17.0789 5.40036 16.9226 5.24408C16.7663 5.0878 16.5544 5 16.3333 5C16.1123 5 15.9004 5.0878 15.7441 5.24408C15.5878 5.40036 15.5 5.61232 15.5 5.83333V15.8333C15.5 16.0543 15.5878 16.2663 15.7441 16.4226C15.9004 16.5789 16.1123 16.6667 16.3333 16.6667Z"
          fill={color}
        />
        <path
          id="Vector_5"
          d="M9.66635 16.6667C9.88736 16.6667 10.0993 16.5789 10.2556 16.4226C10.4119 16.2663 10.4997 16.0543 10.4997 15.8333V5.83333C10.4997 5.61232 10.4119 5.40036 10.2556 5.24408C10.0993 5.0878 9.88736 5 9.66635 5C9.44533 5 9.23337 5.0878 9.07709 5.24408C8.92081 5.40036 8.83301 5.61232 8.83301 5.83333V15.8333C8.83301 16.0543 8.92081 16.2663 9.07709 16.4226C9.23337 16.5789 9.44533 16.6667 9.66635 16.6667Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5037_8450">
          <rect width={size} height={size} fill={color} transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};