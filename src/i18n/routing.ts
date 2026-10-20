import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './locales';

export const routing = defineRouting({
  locales, // 지원 언어
  defaultLocale, // 기본 언어
});
