'use client'
import useLanguageStore from '@/zeustand/languageStore';
import React from 'react'

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  const { translations } = useLanguageStore();

  return (
    <footer className='flex items-center justify-between py-8 w-[90%] mx-auto'>
      <p>© {currentYear} Algoridam. {translations.footer.copyRight}</p>
      <div>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
      </div>
    </footer>
  )
}

export default Footer