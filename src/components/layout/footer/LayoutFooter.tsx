import React from 'react';

import ScrollToTop from './ScrollToTop';
import Text1 from './text/text1';
import Text2 from './text/text2';
import Text3 from './text/text3';
import Text4 from './text/text4';
import Text5 from './text/text5';
import Text6 from './text/text6';
import Text7 from './text/text7';

export default function LayoutFooter() {
  return (
    <>
      {/* 푸터 */}
      <footer className="w-full h-auto space-y-3 md:space-y-4 py-8 px-6 text-[#FFFFFF99] bg-[#2E2E2E] flex flex-col items-center justify-center">
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text1 />
        </div>
        <div className="w-full max-w-3xl border-t border-gray-700 "></div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text2 />
        </div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text3 />
        </div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text4 />
        </div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text5 />
        </div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text6 />
        </div>
        <div className="flex justify-start w-full max-w-3xl text-sm">
          <Text7 />
        </div>

        <ScrollToTop />
      </footer>
    </>
  );
}
