'use client';

import React from 'react';
import useLanguageStore from '@/zeustand/languageStore';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { language } = useLanguageStore();

  return (
    <html lang={language}>
      <head>
        <link rel="icon" href="/algoridam-favicon.svg" />
      </head>
      <body className="bg-gradient-custom from-custom-start to-custom-endbg-gradient-custom to-custom-end">
        {children}
      </body>
    </html>
  );
};

export default LanguageWrapper;
