import { IconAssetProps } from '../types';

export const CheckIcon = (props: IconAssetProps) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector 5492 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7193 1.06225C12.0496 1.33661 12.0949 1.8268 11.8206 2.1571L6.74016 8.27332C5.84693 9.34866 4.21491 9.40215 3.25319 8.38762L0.213232 5.18074C-0.0821752 4.86911 -0.0690255 4.37701 0.242603 4.0816C0.554231 3.78619 1.04633 3.79934 1.34174 4.11097L4.38169 7.31785C4.70227 7.65603 5.24628 7.6382 5.54402 7.27975L10.6244 1.16353C10.8988 0.833228 11.389 0.787881 11.7193 1.06225Z"
        fill={color}
      />
    </svg>
  );
};
