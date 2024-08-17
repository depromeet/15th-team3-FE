export const Circle = ({ color }: { color?: string }) => {
  const fill = color ? color : '#FFBBA2';

  return (
    <svg width={119} height={95} fill="none">
      <circle cx={64.452} cy={64.453} r={64.353} fill={fill} transform="rotate(61.07 64.452 64.453)" />
    </svg>
  );
};
