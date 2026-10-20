// 지원 언어 목록. middleware, request config, 헤더에서 공통으로 사용합니다.
export const locales = ['ko', 'en'] as const;
export const defaultLocale = 'ko';

export type Locale = (typeof locales)[number];
