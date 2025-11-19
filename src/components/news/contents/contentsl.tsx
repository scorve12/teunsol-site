'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contents(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 페이지당 표시할 슬라이드 수
  const slides = [
    1, 2, 3, 4, 5, 6, 7
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

  const body = useTranslations('News');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {currentSlides.map((index) => (
          <div key={index} className="mb-3 bg-white p-2">
            <div
              className="h-[21.875rem] lg:h-[25.063rem] flex flex-col cursor-pointer hover:bg-gray-100"
              onClick={() => openModal(index)}
            >
              <div className="relative w-full mb-4 h-[10.5rem]">
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
