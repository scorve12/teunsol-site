import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './locales';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) notFound();

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
  }
});
