import { GoogleAnalytics } from '@next/third-parties/google';
import dayjs from 'dayjs';
import localFont from 'next/font/local';

import { Providers, RootLayout as ViewportLayout } from '@/common';

import { KakaoScript } from '../scripts/KakaoScript';
import { MazeScript } from '../scripts/MazeScript';

import type { Metadata } from 'next';

dayjs.locale('ko');

const pretendard = localFont({
  src: '../public/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '모링 moring',
  description: '우리가 스스로 꿰메는 모임 팔찌',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <KakaoScript />
      <head>
        <MazeScript />
      </head>
      <body className={pretendard.className}>
        <Providers>
          <ViewportLayout>{children}</ViewportLayout>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
    </html>
  );
}
