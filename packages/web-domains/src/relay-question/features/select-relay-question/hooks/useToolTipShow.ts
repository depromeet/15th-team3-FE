import { useEffect, useState } from 'react';

interface UseToolTipShowProps {
  showTime: number;
}
export const useToolTipShow = ({ showTime = 5000 }: UseToolTipShowProps) => {
  const [isShowToolTip, setIsShowToolTip] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsShowToolTip(false);
    }, showTime);

    return () => clearTimeout(timerId);
  }, []);

  return {
    isShowToolTip,
  };
};
