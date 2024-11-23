'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import useLanguageStore from '@/zeustand/languageStore';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { language } = useLanguageStore();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
      <Head>
        <html lang={language} />
        <link rel="icon" href="/algoridam.svg" />
      </Head>
      <body className="bg-gradient-custom from-custom-start to-custom-end">
        {children}
      </body>
    </>
  );
};

LanguageWrapper.displayName = 'LanguageWrapper';

export default LanguageWrapper;
