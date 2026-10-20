import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text7() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text7')}</span>
    </>
  );
}
