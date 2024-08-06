import { useEffect } from 'react';

/**
 * IOS Safari 브라우저 뷰포트 스크롤 생기는 이슈 대응용
 */

export const useSetHeight = () => {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
};
