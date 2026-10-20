'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// 모달 슬라이드 이미지
const images = Array.from(
  { length: 11 },
  (_, i) => `/image/ppt/img (${i + 1}).jpg`,
);
const totalSlides = images.length;

export default function Contents1() {
  const body = useTranslations('MainBodyContents1');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // 처음/끝에서 멈춤 (버튼 disabled 처리와 동일하게 동작)
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (leftSection) {
      observer.observe(leftSection);
    }
    if (rightSection) {
      observer.observe(rightSection);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="h-[24rem] md:h-[26rem] lg:h-[30rem] flex flex-col lg:flex-row gap-0">
        {/* Left Content */}
        <div
          ref={leftSectionRef}
          className="relative flex flex-col items-center justify-between w-full h-1/2 lg:h-full lg:w-1/2 overflow-hidden group"
        >
          <Image
            src="/image/home/contents1/img1.jpg"
            alt="contents1"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

          {/* Content Container */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between py-6 lg:py-8 px-6 lg:px-8">
            {/* Top: Header */}
            <header
              className={`flex-1 flex items-center justify-center transition-all duration-500 ease-out ${
                isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white text-center leading-relaxed font-light tracking-wide">
                {body('LeftTitle')}
              </h2>
            </header>

            {/* Bottom: Touch Button */}
            <div
              className={`flex justify-center items-center transition-all duration-500 delay-100 ease-out ${
                isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={openModal}
                className="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 border-2 border-white/80 rounded-full text-white text-sm lg:text-base font-light tracking-wider cursor-pointer transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:text-orange-400 hover:bg-white/10 backdrop-blur-sm"
              >
                Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          ref={rightSectionRef}
          className="relative flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden"
        >
          <Image
            src="/image/home/contents1/img2.jpg"
            alt="contents1"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/20"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header Section */}
            <div className="flex-1 flex items-center justify-center px-6 lg:px-8 py-6">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white text-center leading-tight font-light tracking-wide drop-shadow-2xl transition-all duration-500 ease-out ${
                  isIntersecting
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                }`}
              >
                {body('RightTitle')}
              </h2>
            </div>

            {/* Footer Section */}
            <footer
              className={`bg-white/95 backdrop-blur-sm py-3 lg:py-4 px-6 flex justify-center items-center transition-all duration-500 delay-150 ease-out ${
                isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 text-center font-light tracking-wide">
                {body('RightFooter')}
              </p>
            </footer>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl w-[95vw] h-[90vh] max-w-6xl mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-200 hover:scale-110"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content Wrapper */}
            <div className="flex flex-col h-full p-6 lg:p-8">
              {/* Slide Container */}
              <div className="relative flex-1 flex items-center justify-center bg-white rounded-xl shadow-inner overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    sizes="(min-width: 1024px) 1100px, 95vw"
                    className="object-contain transition-opacity duration-300"
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/95 hover:bg-white text-gray-700 hover:text-orange-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-4 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/95 hover:bg-white text-gray-700 hover:text-orange-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  aria-label="Next slide"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Footer: Pagination Info */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">
                    {currentSlide + 1} / {totalSlides}
                  </span>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-200 rounded-full ${
                        index === currentSlide
                          ? 'w-8 h-2 bg-orange-500'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Keyboard Hint */}
                <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-500">
                  <kbd className="px-2 py-1 bg-white rounded shadow-sm border border-gray-200">←</kbd>
                  <kbd className="px-2 py-1 bg-white rounded shadow-sm border border-gray-200">→</kbd>
                  <span>to navigate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
