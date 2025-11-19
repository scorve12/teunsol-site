import React from 'react';
import Text1 from './text/text1';
import Image from 'next/image';
import Text2 from './text/text2';

export default function Contents6() {
  return (
    <>
      <section className="h-[18.75rem] md:h-[23.75rem] w-screen flex justify-center items-center flex-col relative group overflow-hidden">
        <div className="absolute w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-110">
          <Image
            src="/image/home/contents6/img1.jpg"
            alt="contents6"
            fill
            className="object-cover"
          />
        </div>
        <Text1 />
        <Text2 />
        <div className="flex justify-center items-center">
          <div className="z-10 flex justify-center items-center w-20 h-20 border-[3px] border-white rounded-full text-white text-base transition-all duration-500 group-hover:border-orange-500 group-hover:text-orange-500">
            PPT
          </div>
        </div>
      </section>
    </>
  );
}
