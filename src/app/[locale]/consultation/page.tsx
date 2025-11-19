import React from 'react';
import KakaoMap from '@/components/consultation/map/KakaoMap';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Consultation() {
  const body = useTranslations('Consultation');

  return (
    <div className="w-full pb-44">
      {/* 배너 이미지 */}

      <div className="relative w-full h-[25rem] ">
        <Image
          src={'/image/background/메인배경1.jpg'}
          alt="Banner"
          fill
          className="object-cover w-full h-full"
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* 배너 이미지 위에 텍스트 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-100 z-10">
          <h2 className="text-2xl font-bold">{body('Text1')}</h2>
          <p className="text-lg">{body('Text2')}</p>
        </div>
      </div>

      {/* 지도와 텍스트 */}
      <div className="px-[10vw] mt-[-100px] bg-white">
        <KakaoMap />

        <div className="w-[100%] mt-8 mb-8 h-[3.5px] bg-[#5d5d5d]"></div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">{body('Text3')}</h3>
          <div className="w-[45%] mt-4 mb-4 h-[3px] bg-[#5d5d5d]"></div>
          <p>{body('Text4')}</p>
          <p>{body('Text5')}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">{body('Text6')}</h3>
          <div className="w-[45%] mt-4 mb-4 h-[3px] bg-[#5d5d5d]"></div>
          <p>{body('Text7')}</p>
          <p>{body('Text8')}</p>
          <p>{body('Text9')}</p>
        </div>
      </div>
    </div>
  );
}
