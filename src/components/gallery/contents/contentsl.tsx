'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contents(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // 페이지당 표시할 슬라이드 수
  const slides = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29
  ]; // 전체 슬라이드
  const totalPages = Math.ceil(slides.length / itemsPerPage);

  const openModal = (slide: any) => {
    setSelectedSlide(slide);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSlide(null);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentSlides = slides.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const body = useTranslations('Gallery');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10 px-8 lg:px-16 w-full">
        {currentSlides.map((index) => (
          <div key={index} className="bg-white">
            <div
              className="flex flex-col cursor-pointer group"
              onClick={() => openModal(index)}
            >
              {/* 1:1 Aspect Ratio Image Container */}
              <div className="relative w-full pb-[100%] mb-3 overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                  <Image
                    src={`/image/gallery/img (${index}).jpg`}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
              </div>

              <span className="mb-1.5 text-sm lg:text-base text-black line-clamp-2 text-center font-medium">
                {body(`content${index}.title`)}
              </span>
              <span className="mb-2 text-xs lg:text-sm text-gray-500 line-clamp-2 text-center">
                {body(`content${index}.sub`)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션  */}
      <div className="flex justify-center mt-6">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 mx-1 border ${
              currentPage === i + 1 ? 'bg-gray-300' : 'bg-white'
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

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
              className="absolute top-2 right-2 text-gray-400"
              onClick={closeModal}
            >
              &#x2715;
            </button>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
              <Image
                  src={`/image/gallery/img (${selectedSlide}).jpg`}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="lg:pl-4 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-6 lg:mt-0">
                  {body(`content${selectedSlide}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{body(`content${selectedSlide}.sub`)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
