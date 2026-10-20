'use client';

import React, { useEffect, useState } from 'react';
import BlackKlogo from '../../../../../public/image/svg/NonCC(all).svg'; //NonCC(all).svg
import BlackElogo from '../../../../../public/image/svg/NonCC(en).svg';
import WhiteKlogo from '../../../../../public/image/svg/WTCC(all).svg';
import WhiteElogo from '../../../../../public/image/svg/WTCC(en).svg';
import { useParams, usePathname } from 'next/navigation';
import { isMainPage as checkMainPage } from '@/lib/isMainPage';
import Link from 'next/link';

export default function Logo() {
  const params = useParams<{ locale: string }>();
  const locale = params.locale;
  const pathname = usePathname();
  const isMainPage = checkMainPage(pathname);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    if (isMainPage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isMainPage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMainPage]);

  return (
    <>
      <Link
        href={`/${locale}`}
        className="absolute left-2 w-32 md:left-10 md:w-40"
      >
        {isMainPage ? (
          isScrolled ? (
            // 스크롤이 true인 경우
            locale === 'ko' ? (
              <BlackKlogo />
            ) : (
              <BlackElogo />
            )
          ) : // 스크롤이 false인 경우
          locale === 'ko' ? (
            <WhiteKlogo fill="#FFFFFF" />
          ) : (
            <WhiteElogo fill="#FFFFFF" />
          )
        ) : // 메인 페이지가 아닌 경우 항상 블랙 로고 표시
        locale === 'ko' ? (
          <BlackKlogo />
        ) : (
          <BlackElogo />
        )}
      </Link>
    </>
  );
}
