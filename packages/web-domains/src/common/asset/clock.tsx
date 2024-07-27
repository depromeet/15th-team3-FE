interface ClockIconProps {
  size?: number;
}

export const ClockIcon = ({ size = 40 }: ClockIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3359_5007)">
        <path
          d="M24.135 0.346302C23.8947 0.302074 23.6476 0.31123 23.4112 0.373122C23.1748 0.435013 22.9549 0.548127 22.7671 0.70445C22.5793 0.860772 22.4282 1.05648 22.3244 1.27771C22.2206 1.49894 22.1668 1.74028 22.1667 1.98464V6.78297C20.1487 6.51525 18.0962 6.71585 16.1683 7.36922C14.2403 8.02259 12.4887 9.11119 11.0493 10.5506C9.60989 11.99 8.5213 13.7416 7.86793 15.6695C7.21455 17.5975 7.01395 19.65 7.28167 21.668H2.48334C2.23898 21.6681 1.99764 21.7219 1.77641 21.8257C1.55518 21.9295 1.35948 22.0806 1.20315 22.2684C1.04683 22.4562 0.933718 22.6761 0.871826 22.9125C0.809934 23.1489 0.800778 23.396 0.845007 23.6363C1.50502 27.2222 3.13273 30.5594 5.55212 33.2871C7.97152 36.0148 11.0905 38.0293 14.572 39.1126C18.0534 40.196 21.7647 40.307 25.3047 39.4338C28.8447 38.5605 32.0786 36.7362 34.6567 34.158C37.2349 31.5799 39.0592 28.3459 39.9325 24.806C40.8058 21.266 40.6947 17.5547 39.6113 14.0733C38.528 10.5918 36.5135 7.47281 33.7858 5.05342C31.0581 2.63402 27.7209 1.00632 24.135 0.346302ZM20.5 23.3346C19.9172 23.333 19.3451 23.1782 18.8411 22.8856C18.3371 22.5931 17.9188 22.1732 17.6283 21.668H13.8333C13.3913 21.668 12.9674 21.4924 12.6548 21.1798C12.3423 20.8673 12.1667 20.4433 12.1667 20.0013C12.1667 19.5593 12.3423 19.1354 12.6548 18.8228C12.9674 18.5102 13.3913 18.3346 13.8333 18.3346H17.6283C17.9188 17.8353 18.3341 17.4201 18.8333 17.1296V11.668C18.8333 11.2259 19.0089 10.802 19.3215 10.4895C19.6341 10.1769 20.058 10.0013 20.5 10.0013C20.942 10.0013 21.366 10.1769 21.6785 10.4895C21.9911 10.802 22.1667 11.2259 22.1667 11.668V17.1296C22.8024 17.4948 23.2995 18.06 23.5806 18.7371C23.8617 19.4143 23.911 20.1654 23.7208 20.8734C23.5306 21.5815 23.1116 22.2068 22.5291 22.6519C21.9466 23.0971 21.2332 23.3371 20.5 23.3346ZM17.12 0.167969C17.4496 0.167969 17.7719 0.265717 18.046 0.448853C18.32 0.631988 18.5337 0.892286 18.6598 1.19683C18.786 1.50137 18.819 1.83648 18.7547 2.15979C18.6903 2.48309 18.5316 2.78006 18.2985 3.01315C18.0654 3.24623 17.7685 3.40497 17.4452 3.46928C17.1219 3.53359 16.7867 3.50058 16.4822 3.37443C16.1777 3.24829 15.9174 3.03467 15.7342 2.76059C15.5511 2.4865 15.4533 2.16427 15.4533 1.83464C15.4533 1.39261 15.6289 0.968685 15.9415 0.656124C16.2541 0.343564 16.678 0.167969 17.12 0.167969ZM10.2867 3.09464C10.6163 3.09464 10.9385 3.19238 11.2126 3.37552C11.4867 3.55866 11.7003 3.81895 11.8265 4.1235C11.9526 4.42804 11.9856 4.76315 11.9213 5.08645C11.857 5.40975 11.6983 5.70673 11.4652 5.93981C11.2321 6.1729 10.9351 6.33164 10.6118 6.39594C10.2885 6.46025 9.95341 6.42725 9.64887 6.3011C9.34432 6.17496 9.08403 5.96134 8.90089 5.68725C8.71775 5.41317 8.62001 5.09094 8.62001 4.7613C8.61912 4.31956 8.79364 3.89554 9.10522 3.5824C9.41679 3.26926 9.83994 3.09263 10.2817 3.0913L10.2867 3.09464ZM5.13167 8.06964C5.46131 8.06964 5.78354 8.16738 6.05762 8.35052C6.33171 8.53366 6.54533 8.79395 6.67147 9.0985C6.79762 9.40304 6.83062 9.73815 6.76632 10.0615C6.70201 10.3848 6.54327 10.6817 6.31018 10.9148C6.0771 11.1479 5.78013 11.3066 5.45682 11.3709C5.13352 11.4353 4.79841 11.4022 4.49387 11.2761C4.18932 11.15 3.92903 10.9363 3.74589 10.6623C3.56275 10.3882 3.46501 10.0659 3.46501 9.7363C3.46501 9.29428 3.6406 8.87035 3.95316 8.55779C4.26572 8.24523 4.68965 8.06964 5.13167 8.06964ZM2.46501 15.0146C2.79464 15.0146 3.11688 15.1124 3.39096 15.2955C3.66504 15.4787 3.87866 15.739 4.00481 16.0435C4.13095 16.348 4.16396 16.6832 4.09965 17.0065C4.03534 17.3298 3.87661 17.6267 3.64352 17.8598C3.41043 18.0929 3.11346 18.2516 2.79016 18.3159C2.46686 18.3803 2.13174 18.3472 1.8272 18.2211C1.52266 18.095 1.26236 17.8813 1.07922 17.6073C0.896088 17.3332 0.79834 17.0109 0.79834 16.6813C0.798339 16.2399 0.973476 15.8164 1.28532 15.504C1.59716 15.1915 2.02022 15.0155 2.46167 15.0146H2.46501Z"
          fill="#E1E1E1"
        />
      </g>
      <defs>
        <clipPath id="clip0_3359_5007">
          <rect width="40" height="40" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};