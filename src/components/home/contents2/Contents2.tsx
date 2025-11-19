import Image from 'next/image';
import React from 'react';
import NewsCarousel from './newscarousel/newscarousel';
import Text1 from './text/text1';

export default function Contents2() {
  return (
    <>
      <section className="h-[40.625rem] lg:h-[47.75rem] w-screen flex justify-center items-center relative">
        <Image
          src="/image/home/contents2/img1.jpg"
          alt="contents1"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col w-2/3 h-full pt-14 lg:pt-24 text-white">
          <span className="mb-4 text-xl lg:text-4xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            NEWS
          </span>
          <Text1 />
          <article className="absolute bottom-0 w-full px-12 h-2/3 bg-white">
            <NewsCarousel />
          </article>
        </div>
      </section>
    </>
  );
}
