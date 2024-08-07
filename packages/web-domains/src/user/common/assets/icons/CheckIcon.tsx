export const CheckIcon = ({ color }: { color?: string }) => {
  const fill = color ? color : '#FF7664';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={30} fill="none">
      <path stroke={fill} strokeLinecap="round" strokeWidth={6} d="m3 14.087 10.034 11.42a4 4 0 0 0 6.065-.064L38 3" />
    </svg>
  );
};
