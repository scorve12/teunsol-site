'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

// 메뉴 항목 (번역 키, 경로)
const navItems = [
  { key: 'Nav1', path: '' },
  { key: 'Nav2', path: '/consultation' },
  { key: 'Nav3', path: '/gallery' },
  { key: 'Nav4', path: '/copyright' },
  { key: 'Nav5', path: '/news' },
] as const;

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
      <button
        className="lg:hidden flex items-center justify-center absolute right-4 w-11 h-11"
        onClick={toggleDropdown}
        aria-label="Open menu"
        aria-expanded={dropdownOpen}
      >
        <RxHamburgerMenu className="text-3xl" />
      </button>
      {/* 모달 오버레이 */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeDropdown}
        ></div>
      )}
      {/* 모달 */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-80 max-w-[85vw] flex flex-col bg-[#444A53FA] z-50 transform transition-[transform,visibility] duration-300 ${
          dropdownOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
      >
        <div className="h-14 shrink-0 pl-4 pr-1 bg-black flex justify-between items-center border-b border-gray-400 text-sm">
          <span>Teunsol International</span>
          <button
            className="w-11 h-11 flex items-center justify-center text-xl"
            onClick={closeDropdown}
            aria-label="Close menu"
          >
            <RxCross2 />
          </button>
        </div>
        <nav className="flex flex-col">
          {navItems.map(({ key, path }) => {
            const href = `/${locale}${path}`;
            const isCurrent = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                onClick={closeDropdown}
                aria-current={isCurrent ? 'page' : undefined}
                className={`h-14 px-4 flex items-center text-base border-b border-gray-700 ${
                  isCurrent ? 'bg-white/10 font-semibold' : 'hover:bg-white/5'
                }`}
              >
                {header(key)}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
