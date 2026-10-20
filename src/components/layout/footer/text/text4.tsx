import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text4() {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text4')}</span>
    </>
  );
}
