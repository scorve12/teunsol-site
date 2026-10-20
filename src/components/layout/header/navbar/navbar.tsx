'use client';

import { usePathname } from 'next/navigation';
import { isMainPage as checkMainPage } from '@/lib/isMainPage';
import React, { useEffect, useState } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = checkMainPage(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` h-16 md:h-20 w-screen fixed top-0 flex justify-center items-center transition-all duration-300 ease-in-out text-lg ${
          isScrolled
            ? 'bg-white text-black shadow-lg'
            : isMainPage
              ? 'bg-black bg-opacity-15 text-white'
              : 'bg-white text-black shadow-lg'
        }`}
      >
        {children}
      </nav>
    </>
  );
}
