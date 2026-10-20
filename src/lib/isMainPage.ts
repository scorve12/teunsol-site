import { locales } from '@/i18n/locales';

// 메인 페이지('/', '/ko', '/en') 여부
export function isMainPage(pathname: string): boolean {
  return pathname === '/' || locales.some((locale) => pathname === `/${locale}`);
}
