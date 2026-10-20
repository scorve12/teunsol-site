import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text6() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text6')}</span>
    </>
  );
}
