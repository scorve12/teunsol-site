import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import LayoutFooter from '@/components/layout/footer/LayoutFooter';
import LayoutHeader from '@/components/layout/header/LayoutHeader';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

declare global {
  interface Window {
    Kakao: any;
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

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
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={notoSansKr.className}>
        <NextIntlClientProvider>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
