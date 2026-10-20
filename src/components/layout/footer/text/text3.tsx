import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text3() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text3')}</span>
    </>
  );
}
