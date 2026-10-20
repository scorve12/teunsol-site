import Image from 'next/image';
import React from 'react';
import NewsCarousel from './newscarousel/newscarousel';
import Text1 from './text/text1';

export default function Contents2() {
  return (
    <>
      <section className="w-full flex justify-center relative">
        <Image
          src="/image/home/contents2/img1.jpg"
          alt="contents1"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col w-full px-6 md:px-0 md:w-2/3 pt-14 lg:pt-24 text-white">
          <span className="mb-4 text-xl lg:text-4xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            NEWS
          </span>
          <Text1 />
          <article className="mt-10 lg:mt-14 w-full px-10 md:px-12 pb-10 bg-white">
            <NewsCarousel />
          </article>
        </div>
      </section>
    </>
  );
}
