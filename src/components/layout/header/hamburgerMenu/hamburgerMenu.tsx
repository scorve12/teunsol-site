'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';


export default function HamburgerMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const header = useTranslations('Header');
  const params = useParams<{ locale: string }>();
  const locale = params.locale;
  const pathname = usePathname();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      {/* 햄버거 버튼 */}
      <div className="lg:hidden flex items-center absolute right-6 cursor-pointer">
        <RxHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      {/* 모달 오버레이 */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeDropdown}
        ></div>
      )}
      {/* 모달 */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-80 flex flex-col  bg-[#444A53FA] z-50 transform transition-transform duration-300 ${
          dropdownOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-[5%] px-4 bg-black flex justify-between items-center border-b border-gray-400 text-sm ">
          <span>Teunsol International</span>
          <span className="text-base cursor-pointer " onClick={closeDropdown}>
            X
          </span>
        </div>
          <div className="text-sm h-[6.7%] border-b border-gray-700 flex items-center px-4 cursor-pointer ">
            {pathname === `/${locale}` ? (
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav1')}</span>
            ) : (
              <Link href={`/${locale}`}>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav1')}</span>
              </Link>
            )}
          </div>      
          <div className="text-sm h-[6.7%] border-b border-gray-700 flex items-center px-4 cursor-pointer ">
          {pathname === `/${locale}/consultation` ? (
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav2')}</span>
            ) : (
              <Link href={`/${locale}/consultation`}>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav2')}</span>
              </Link>
            )}
          </div>
          <div className="text-sm h-[6.7%] border-b border-gray-700 flex items-center px-4 cursor-pointer  ">
          {pathname === `/${locale}/gallery` ? (
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav3')}</span>
            ) : (
              <Link href={`/${locale}/gallery`}>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav3')}</span>
              </Link>
            )}
          </div>
          <div className="text-sm h-[6.7%] border-b border-gray-700 flex items-center px-4 cursor-pointer  ">
          {pathname === `/${locale}/copyright` ? (
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav4')}</span>
            ) : (
              <Link href={`/${locale}/copyright`}>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav4')}</span>
              </Link>
            )}
          </div>
          <div className="text-sm h-[6.7%] border-b border-gray-700 flex items-center px-4 cursor-pointer  ">      
          {pathname === `/${locale}/news` ? (
              <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav5')}</span>
            ) : (
              <Link href={`/${locale}/news`}>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">{header('Nav5')}</span>
              </Link>
            )}
          </div>
      </div>
    </>
  );
}
