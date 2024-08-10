import { Providers } from '@/common';
import { RootLayout as ViewportLayout } from '@sambad/web-domains/commmon';
import dayjs from 'dayjs';
import localFont from 'next/font/local';

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
  verification: {
    google: 'google-site-verification=MqPBe2aLGPleycDxdUvmdNi_e3z6_eV10PrQZDThB-M',
    other: {
      'naver-site-verification': 'd30a244c9a2384e8572c4e6ffd407d4e4139cbbc',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Providers>
          <ViewportLayout>{children}</ViewportLayout>
        </Providers>
      </body>
    </html>
  );
}
