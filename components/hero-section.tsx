import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="w-[90%] mx-auto max-w-[1440px]">
            <Image className='absolute left-2/3 top-20 z-0 w-[267px] h-[267px] opacity-50 floating-1' src="/bubble2.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
            <Image className='absolute top-1/2 left-1/4 z-0 w-[213px] h-[213px] opacity-50 floating-2' src="/bubble3.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
            <Image className='absolute left-1/3 top-20 z-0 w-[134.28px] h-[142.5px] opacity-50 floating-3' src="/bubble5.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
            <div className='absolute -left-[100vw] lg:-left-[20vw] w-[300vw] lg:w-[140vw] -translate-y-[60px] md:-translate-y-[50px] lg:-translate-y-[180px] top-full h-[100px] lg:h-[180px] overflow-hidden'>
              <div className='glowing-oval'></div>
            </div>

            <div className='flex flex-col items-center pb-20'>
              <h1 className='z-10 text-center text-[40px] text-6xl lg:text-8xl mt-24 mb-4 font-medium'>Design & Build <br /> Softwares Solutions.</h1>
              <p className='z-10 text-center mb-4 opacity-70 font-light'>
                We specialize in creating custom software solutions that empower <br /> businesses to achieve their unique goals.
              </p>
              <button className='z-10 border border-[#E39CD1] bg-[#330658] py-4 px-7 text-lg rounded-full mt-8 btn-shadow'>
                Start a project
              </button>
            </div>
        </section>
    )
}

export default HeroSection