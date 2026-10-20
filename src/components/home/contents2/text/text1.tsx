import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1() {
  const body = useTranslations('MainBodyContents2');

  return (
    <>
      <span className="text-lg lg:text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {body('Text1')}
      </span>
    </>
  );
}
