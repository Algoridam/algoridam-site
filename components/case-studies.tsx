'use client'

import React from 'react'
import Image from 'next/image'
import useLanguageStore from '@/zeustand/languageStore'

const CaseStudies = () => {
  const { translations } = useLanguageStore();

  return (
    <section className='flex flex-col items-center relative w-[90%] mx-auto max-w-[1440px]'>
        <Image className='absolute top-1/2 left-1/4 z-0 w-[400px] h-[400px] opacity-50 floating-4' src="/bubble1.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
        <Image className='absolute top-1/4 left-1/2 z-0 w-[213px] h-[213px] opacity-50 floating-1' src="/bubble3.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />

        <h1 className='text-[40px] md:text-6xl font-medium text-center leading-snug'>{translations.caseStudies.heading}</h1>
        <p className='mt-4 text-center tracking-wide opacity-70'>{translations.caseStudies.intro}</p>
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 md:w-3/4 mx-auto'>
          {
            translations.caseStudies.studies.map((study: {name: string; description: string}, index: number) => (
              <div key={index} className='bg-white bg-opacity-5 border border-white border-opacity-20 p-8 rounded-[48px] z-10'>
                <Image src="/sample-image.png" alt="arrow" className='hidden md:block w-full h-full rounded-3xl mb-8 object-contain' width={100} height={200} layout="intrinsic" />
                <Image src="/sample-image.png" alt="arrow" className='block md:hidden w-full h-[315px] rounded-3xl mb-8 object-cover' width={100} height={315} />
                <div className='flex items-center justify-between w-full'>
                  <p className='text-2xl font-medium'>{study.name}</p>
                  <div className='p-2 rounded-full border border-white border-opacity-20 w-max'>
                    <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                  </div>
                </div>
                <p className='opacity-70 mt-4'>{study.description}</p>
              </div>
            ))
          }
        </div>
        <button className="bg-[#0C0222] border-[1.5px] border-[#E39CD1] border-opacity-50 py-5 px-14 rounded-full mt-14">{translations.caseStudies.seeAllCasesButton}</button>
    </section>
  )
}

export default CaseStudies