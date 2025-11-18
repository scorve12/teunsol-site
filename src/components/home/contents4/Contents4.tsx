'use client';

import React, { useEffect, useRef, useState } from 'react';
import Text1 from './text/text1';
import Image from 'next/image';
import Text2 from './text/text2';
import Text3 from './text/text3';

export default function Contents4() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const refs = [textRef1, textRef2, textRef3];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <section className="h-[23.188rem] w-screen flex flex-col md:flex-row  overflow-hidden">
        <div
          className="w-full h-1/3 md:h-full md:w-1/3 flex justify-center items-center relative overflow-hidden cursor-pointer"
          onClick={() => openModal1()}
        >
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img1.jpg"
              alt="img1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRef1} className="relative">
            <Text1 />
          </div>
        </div>
        <div
          className="w-full h-1/3 md:h-full md:w-1/3 flex justify-center items-center relative overflow-hidden cursor-pointer"
          onClick={() => openModal2()}
        >
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img2.jpg"
              alt="img2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRef2} className="relative">
            <Text2 />
          </div>
        </div>
        <div className="w-full h-1/3 md:h-full  md:w-1/3 flex justify-center items-center relative overflow-hidden">
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img3.jpg"
              alt="img3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRef3} className="relative">
            <Text3 />
          </div>
        </div>
      </section>

      {isOpen1 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal1}
        >
          <div
            className="relative bg-white rounded-lg p-6 w-[80vw] h-[60vh] max-w-4xl mx-4 lg:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 "
              onClick={closeModal1}
            >
              &#x2715;
            </button>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
                <Image
                  src="/image/home/contents4/img1.jpg"
                  alt="img1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="lg:pl-4 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-6 lg:mt-0">
                  투자정보
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  투자정보 투자정보 투자정보
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal2}
        >
          <div
            className="relative bg-white rounded-lg p-6 w-[80vw] h-[60vh] max-w-4xl mx-4 lg:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 "
              onClick={closeModal2}
            >
              &#x2715;
            </button>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
                <Image
                  src="/image/home/contents4/img2.jpg"
                  alt="img2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="lg:pl-4 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-6 lg:mt-0">
                  경영이념
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  경영이념 경영이념 경영이념
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
