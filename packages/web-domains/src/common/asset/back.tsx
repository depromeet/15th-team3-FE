interface BackIconProps {
  size?: number;
}

export const BackIcon = ({ size = 24 }: BackIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_3223_11451" type="luminance" maskUnits="userSpaceOnUse" x="6" y="2" width="10" height="20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5642 4.15204C15.8592 3.86104 15.8632 3.38604 15.5722 3.09104C15.2812 2.79704 14.8062 2.79404 14.5112 3.08504L6.73316 10.755C6.39716 11.086 6.21216 11.529 6.21216 12.001C6.21216 12.472 6.39716 12.916 6.73316 13.247L14.5112 20.916C14.6572 21.059 14.8472 21.131 15.0382 21.131C15.2312 21.131 15.4252 21.056 15.5722 20.908C15.8632 20.613 15.8592 20.138 15.5642 19.847L7.78716 12.178C7.72116 12.115 7.71216 12.04 7.71216 12.001C7.71216 11.962 7.72116 11.886 7.78716 11.823L15.5642 4.15204Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3223_11451)">
        <rect width="24" height="24" fill="black" />
      </g>
    </svg>
  );
};
