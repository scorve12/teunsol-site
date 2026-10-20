import React from 'react';
import Contents1 from '@/components/home/contents1/Contents1';
import Contents2 from '@/components/home/contents2/Contents2';
import Contents3 from '@/components/home/contents3/Contents3';

export default function Home() {
  return (
    <>
      {/* 메인 */}
      <main>
        <Contents1 />
        <Contents2 />
        <Contents3 />
      </main>
    </>
  );
}
