import { IconAssetProps } from '../types';

export const AngleLeftIcon = (props: IconAssetProps) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9209 1.50508C17.9206 1.90277 17.7623 2.28404 17.4809 2.56508L9.80895 10.2371C9.57673 10.4692 9.39252 10.7449 9.26684 11.0482C9.14117 11.3516 9.07648 11.6767 9.07648 12.0051C9.07648 12.3334 9.14117 12.6586 9.26684 12.9619C9.39252 13.2653 9.57673 13.5409 9.80895 13.7731L17.4709 21.4351C17.7442 21.718 17.8954 22.0969 17.892 22.4902C17.8885 22.8835 17.7308 23.2597 17.4527 23.5378C17.1746 23.8159 16.7983 23.9737 16.405 23.9771C16.0118 23.9805 15.6329 23.8293 15.3499 23.5561L7.68795 15.9001C6.65771 14.8678 6.0791 13.469 6.0791 12.0106C6.0791 10.5522 6.65771 9.15334 7.68795 8.12108L15.3599 0.444075C15.5697 0.234159 15.8371 0.0911886 16.1281 0.0332545C16.4192 -0.0246796 16.7209 0.00502652 16.9951 0.118614C17.2692 0.232202 17.5036 0.424565 17.6684 0.671364C17.8332 0.918163 17.9211 1.2083 17.9209 1.50508Z"
        fill={color}
      />
    </svg>
  );
};
