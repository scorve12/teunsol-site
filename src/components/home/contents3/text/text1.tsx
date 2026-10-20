import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1() {
  const body = useTranslations('MainBodyContents3');

  return (
    <>
      <span className="text-lg lg:text-2xl text-gray-500">{body('Text1')}</span>
    </>
  );
}
