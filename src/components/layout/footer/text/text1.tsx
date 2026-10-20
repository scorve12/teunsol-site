import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text1')}</span>
    </>
  );
}
