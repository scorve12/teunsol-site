'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function BackgroundImage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [opacity, setOpacity] = useState(1); // 이제 한 개의 opacity만 사용하여 전환을 관리합니다.
  const images = [
    '/image/background/메인배경1.jpg',
    '/image/background/메인배경2.jpg',
    '/image/background/메인배경3.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 시작할 때 현재 이미지를 페이드 아웃시키고
      setOpacity(0);
    }, 5000); // 5초마다 이미지 전환

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timeoutId = null;
    if (opacity === 0) {
      // 페이드 아웃 완료 후 다음 이미지로의 전환을 조절합니다.
      timeoutId = setTimeout(() => {
        // 현재 이미지를 다음 이미지로 업데이트하고 페이드 인 시작
        setCurrentImage(nextImage);
        setNextImage((nextImage + 1) % images.length); // 다음 이미지를 세팅
        setOpacity(1);
      }, 670); // 이전 이미지가 완전히 사라진 후에 업데이트
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [opacity, nextImage, images.length]);

  const pathname = usePathname();
  const isMainPage =
    pathname === '/' || pathname === '/ko' || pathname === '/en';

  return (
    <div
      className={`relative w-full h-full  ${!isMainPage ? 'hidden' : ''} overflow-hidden`}
    >
      <div
        className="absolute inset-0 transition-opacity duration-1000  "
        style={{ opacity }}
      >
        <Image
          src={images[currentImage]}
          alt="Background image"
          fill
          className="object-cover"
        />
      </div>
      {children}
    </div>
  );
}
