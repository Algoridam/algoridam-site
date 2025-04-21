'use client'

import React, {FC} from 'react'
import Image from 'next/image'
import useLanguageStore from '@/zeustand/languageStore'

type props = {
  isServicesPage?: boolean
}

const Services: FC<props> = ({isServicesPage}) => {
  const { translations } = useLanguageStore();

  return (
    <section className='z-20'>
      {
        !isServicesPage && (
          <div className='slider'>
            <div className='slide-track opacity-70'>
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp1.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp2.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp3.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp4.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
              <Image className='min-w-[115px] slide' src="/comp5.svg" alt="Vercel Logo" width={115} height={35} layout="intrinsic" />
            </div>
          </div>
        )
      }

        <div className='flex flex-col items-center pt-[100px] w-[90%] mx-auto max-w-[1440px]'>
          <h1 className='text-[40px] md:text-6xl font-medium text-center leading-snug'>{translations.services.heading}</h1>
          <p className='mt-4 text-center tracking-wide opacity-70'>{translations.services.intro}</p>
          <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 md:w-3/4 mx-auto'>
            {
              translations.services.services.map((service: {name: string; description: string}, index: number) => (
                <div key={index} className='bg-white bg-opacity-5 border border-white border-opacity-20 p-8 rounded-3xl'>
                  <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max'>
                    <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                  </div>
                  <p className='text-2xl font-medium mb-2'>{service.name}</p>
                  <p className='opacity-70'>{service.description}</p>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Services