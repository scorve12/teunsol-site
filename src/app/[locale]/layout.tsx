import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR, Noto_Sans_JP } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LayoutFooter from '@/components/layout/footer/LayoutFooter';
import LayoutHeader from '@/components/layout/header/LayoutHeader';
import Script from 'next/script';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

const notoSansJp = Noto_Sans_JP({
  weight: ['500'],
  subsets: ['latin'],
});
declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: 'Teunsol International',
  description: 'Global Project Management',
  icons: {
    icon: '/image/svg/Logo1.svg',
  },
  openGraph: {
    title: 'Teunsol International',
    description: 'Global Project Management',
    images: ['/image/svg/Logo1.svg'],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // local 언어에 따라 폰트 변경. 현재 예시로 한국어,일본어,영어만 지원
  let fontClass = notoSansKr.className;
  if (locale === 'jp') {
    fontClass = notoSansJp.className;
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        />
      </head>
      <body className={fontClass}>
        {/* <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        /> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
