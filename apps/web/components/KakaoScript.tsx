'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const KakaoScript = () => {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  };

  return <Script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" onLoad={onLoad} />;
};
