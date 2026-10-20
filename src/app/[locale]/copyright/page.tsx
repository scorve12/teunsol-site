import React from 'react';
import Logo1 from '../../../../public/image/svg/Logo1.svg';
import Logo2 from '../../../../public/image/svg/Logo2.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Copyright() {
  const body = useTranslations('Copyright');

  return (
    <div className="w-full pb-44 flex flex-col items-center">
      {/* 배너 이미지 */}

      <div className="relative w-full h-60 ">
        <Image
          src={'/image/background/메인배경1.jpg'}
          alt="Banner"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      {/* 텍스트 */}
      <div className="flex flex-col w-[70vw] mt-28 ">
        <h1 className="font-bold text-2xl">{body('Text1')}</h1>
        <h2 className="font-medium text-lg">{body('Text2')}</h2>
        <div className="mt-20 py-10 px-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-24">
          <div className="w-32 sm:w-36 lg:w-44">
            <Logo1 className="w-full h-auto" />
          </div>
          <div className="w-56 sm:w-60 lg:w-72">
            <Logo2 className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
