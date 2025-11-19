'use client';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute left-0 z-10 text-3xl text-black cursor-pointer top-1/2"
    style={{ left: '-40px' }}
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute right-0 z-10 text-3xl text-black cursor-pointer top-1/2"
    style={{ right: '-40px' }}
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  nextArrow: <NextArrow onClick={() => {}} />,
  prevArrow: <PrevArrow onClick={() => {}} />,
  responsive: [
    {
      breakpoint: 1024, // lg 이하
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 600, // md 이하
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function NewsCarousel(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  // 테스트를 위한 임시 배열
  const slides = [1, 2, 3, 4];
  const openModal = (slide: any) => {
    setSelectedSlide(slide);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSlide(null);
  };

  const body = useTranslations('News');

  return (
    <>
      <Slider {...settings}>
        {slides.map((index) => (
          <div
            key={index}
            className="relative px-1 lg:px-4 xl:px-6 2xl:px-8 pt-14 "
          >
            <div
              className="h-[21.875rem] lg:h-[25.063rem] flex flex-col cursor-pointer  hover:bg-gray-100 "
              onClick={() => openModal(index)}
            >
              <div className="relative w-full mb-4 h-[9.5rem]">
                <Image
                  src={`/image/news/img (${index}).jpg`}
                  alt="news"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mb-2 text-sm lg:text-base text-orange-400">
                NEWS
              </span>
              <span className="mb-4 text-lg lg:text-xl text-black max-h-20 title-text-overflow">
              {body(`content${index}.title`)}
              </span>
              <span className="mb-4 text-sm lg:text-base text-gray-500 contents-text-overflow">
                {body(`content${index}.sub`)}
              </span>
            </div>
          </div>
        ))}
      </Slider>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-6 w-[80vw] h-[60vh] max-w-4xl mx-4 lg:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 "
              onClick={closeModal}
            >
              &#x2715;
            </button>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
                <Image
                  src={`/image/news/img (${selectedSlide}).jpg`}
                  alt="news"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:pl-4 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-6 lg:mt-0">
                  {body(`content${selectedSlide}.title`)} 
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                {body(`content${selectedSlide}.sub`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}