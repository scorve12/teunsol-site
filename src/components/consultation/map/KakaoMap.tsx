'use client';
import { Map } from 'react-kakao-maps-sdk';
import React from 'react';
import { useTranslations } from 'next-intl';
import useKakaoLoader from './useKakaoloader';

const appkey = process.env.NEXT_PUBLIC_KAKAO_KEY;

export default function KakaoMap() {
  // 키가 없으면 지도 대신 안내 표시
  if (!appkey) {
    return <MapFallback />;
  }
  return <KakaoMapView appkey={appkey} />;
}

function KakaoMapView({ appkey }: { appkey: string }) {
  const [, error] = useKakaoLoader(appkey);

  if (error) {
    return <MapFallback />;
  }

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 35.11885012394496,
        lng: 126.76539684846757,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '500px',
      }}
      level={3} // 지도의 확대 레벨
    />
  );
}

function MapFallback() {
  const body = useTranslations('Consultation');
  const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(body('Text4'))}`;

  return (
    <div className="w-full h-64 md:h-80 flex flex-col items-center justify-center gap-4 bg-gray-100 border border-gray-200 text-center px-6">
      <p className="text-gray-700">{body('Text4')}</p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full bg-slate-700 text-white text-sm hover:bg-slate-800"
      >
        {body('MapLink')}
      </a>
    </div>
  );
}
