import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/locales';

export default createMiddleware({
  locales, // 지원 언어
  defaultLocale, // 기본 언어
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/:locale(ko|en)/:path*'],
};
