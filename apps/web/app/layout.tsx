import { Providers } from '@/common';
import { RootLayout as ViewportLayout } from '@sambad/web-domains/commmon';
import dayjs from 'dayjs';
import localFont from 'next/font/local';

import { KakaoScript } from '../scripts/KakaoScript';

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
      <body className={pretendard.className}>
        <Providers>
          <ViewportLayout>{children}</ViewportLayout>
        </Providers>
        <KakaoScript />
      </body>
    </html>
  );
}
