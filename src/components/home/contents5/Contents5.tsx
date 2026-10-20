import React from 'react';
import Logo from '../../../../public/image/svg/Logo1.svg';
export default function Contents5() {
  return (
    <>
      <section className="h-67.5 md:h-81 w-screen flex flex-col md:flex-row">
        <div className="my-5 md:my-0 w-full md:w-1/3 h-1/3 md:h-auto md:bg-gray-200 flex justify-center items-center">
          <span className="text-gray-600 text-2xl md:text-4xl">
            CERTIFICATION
          </span>
        </div>
        <div className="w-full md:w-2/3 flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40">
          <div className="w-28 md:w-40">
            <Logo />
          </div>
          <div className="w-28 md:w-40">
            <Logo />
          </div>
          <div className="w-28 md:w-40">
            <Logo />
          </div>
          <div className="w-28 md:w-40">
            <Logo />
          </div>
        </div>
      </section>
    </>
  );
}
