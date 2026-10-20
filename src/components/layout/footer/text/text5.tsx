import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text5() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text5')}</span>
    </>
  );
}
