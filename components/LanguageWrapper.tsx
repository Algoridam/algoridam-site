'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import useLanguageStore from '@/zeustand/languageStore';
import { Instrument_Sans } from 'next/font/google';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { language } = useLanguageStore();

  return (
    <>
      <Head>
        <html lang={language} className={instrumentSans.className} />
        <link rel="icon" type="image/svg+xml" href="/algoridam.svg" />
      </Head>
      <body className="bg-gradient-custom from-custom-start to-custom-end">
        {children}
      </body>
    </>
  );
};

LanguageWrapper.displayName = 'LanguageWrapper';

export default LanguageWrapper;
