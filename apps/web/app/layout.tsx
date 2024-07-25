import { Providers, RootLayout as ViewportLayout } from '@sambad/web-domains/commmon';
import dayjs from 'dayjs';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

dayjs.locale('ko');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <ViewportLayout>{children}</ViewportLayout>
        </Providers>
      </body>
    </html>
  );
}
