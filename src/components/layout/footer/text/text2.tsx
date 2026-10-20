import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text2() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text2')}</span>
    </>
  );
}
