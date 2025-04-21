'use client'

import React from 'react'
import Image from 'next/image'
import useLanguageStore from '@/zeustand/languageStore';

const HeroSection = () => {
  const { translations } = useLanguageStore();

    return (
      <section className="w-[90%] mx-auto max-w-screen mb-10 overflow-hidden">
        <Image className='absolute left-2/3 top-20 z-0 size-[180px] md:size-[267px] opacity-50 floating-1' src="/bubble2.svg" alt="Bubble 1" width={550} height={50} layout="intrinsic" />
        <Image className='absolute top-1/2 left-1/4 z-0 size-[150px] md:size-[213px] opacity-50 floating-2' src="/bubble3.svg" alt="Bubble 2" width={550} height={50} layout="intrinsic" />
        <Image className='absolute left-1/3 top-20 z-0 w-[134.28px] h-[142.5px] opacity-50 floating-3' src="/bubble5.svg" alt="Bubble 3" width={550} height={50} layout="intrinsic" />
        <Image className='absolute left-1/4 top-20 z-0 size-[140px] md:size-[200px] opacity-50 floating-4' src="/bubble2.svg" alt="Bubble 4" width={550} height={50} layout="intrinsic" />
        <Image className='absolute top-3/4 left-1/4 z-0 size-[120px] md:size-[150px] opacity-50 floating-5' src="/bubble3.svg" alt="Bubble 5" width={550} height={50} layout="intrinsic" />

        <div className='flex flex-col items-center pb-20'>
          <h1 className='z-10 text-center text-5xl lg:text-8xl mt-24 mb-4 font-medium'>{translations.hero.heading}</h1>
          <p className='z-10 text-center mb-4 opacity-70 font-light'>{translations.hero.description}</p>
          <button className='z-10 border border-[#E39CD1] bg-[#330658] py-4 px-7 lg:text-lg rounded-full mt-8 hover:btn-shadow'>
            {translations.hero.buttonText}
          </button>
        </div>
      </section>
    )
}

export default HeroSection