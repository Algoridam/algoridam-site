'use client'
import React, { useState, useRef, MouseEvent } from 'react';
import SiteHeader from '@/components/header'
import Image from 'next/image'
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import useLanguageStore from '@/zeustand/languageStore';


const AboutPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;
  const { translations } = useLanguageStore();
  const contactRef = useRef<HTMLElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust multiplier for speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const onscrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const onscrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className='about-shadow-1'>
      <SiteHeader contactRef={contactRef} />

      <Image className='absolute left-1/3 top-20 z-0 w-[134.28px] h-[142.5px] opacity-50 floating-3' src="/bubble5.svg" alt="Bubble 3" width={550} height={50} layout="intrinsic" />

      <section className='py-[100px] text-center w-[90%] mx-auto max-w-[1440px]'>
          <h1 className='text-[40px] md:text-6xl leading-snug font-medium text-center mb-4'>{translations.about.meetOurTeam}</h1>
          <div className='flex flex-col-reverse md:flex-col'>
            <div className='w-[90%] max-w-[1024px] h-[240px] md:h-[515px] mx-auto mt-10 md:my-14'>
              <Image src="/sample-image.png" alt="arrow" className='w-full h-full rounded-3xl mb-8 object-cover' width={100} height={500} />
            </div>
            <p className='opacity-70 text-center text-xl font-light leading-8'>
              {translations.about.teamDescription}
            </p>
          </div>
      </section>

      <section className='about-shadow-2'>
        <div className='py-[100px] md:py-[160px] w-[90%] mx-auto max-w-[1440px]'>
          <h1 className='text-[40px] md:text-6xl leading-snug font-medium text-center'>{translations.about.whyAlgoridam}</h1>
          <div className='mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:w-4/5 mx-auto'>
          {translations.about.services.map((service: string, index: number) => (
            <div key={index} className='bg-white bg-opacity-5 border border-white border-opacity-20 p-8 rounded-3xl'>
              <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max'>
                <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
              </div>
              <p className='text-2xl font-medium mb-2'>{service}</p>
            </div>
          ))}
            </div>
        </div>
      </section>

      <section className='py-[200px] case-study-background'>
        <div className='w-[95%] ml-[5%]'>
          <div className='md:flex justify-between'>
            <h1 className='text-[40px] md:text-6xl leading-snug font-medium text-center md:text-left'>
              {translations.about.discoverOurTeam}
            </h1>
            <div className='hidden md:flex items-center gap-5 mr-[5%]'>
              <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max cursor-pointer select-none hover:bg-white hover:bg-opacity-5 transition-all' onClick={onscrollLeft}>
                <Image src="/arrow-left.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
              </div>
              <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max cursor-pointer select-none hover:bg-white hover:bg-opacity-5 transition-all' onClick={onscrollRight}>
                <Image className='-scale-x-100' src="/arrow-left.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
              </div>
            </div>
          </div>
          <div
            className='hidden-scrollbar mt-11 md:mt-16 md:pr-4 flex flex-col md:flex-row gap-10 overflow-auto w-full mx-auto cursor-grab pb-5'
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {translations.about.team.map((member: {name: string; role: string}, index: number) => (
              <div key={index} className='bg-white bg-opacity-5 border border-white border-opacity-20 p-8 rounded-[48px] md:min-w-[460px]'>
                  <Image src="/sample-image.png" alt="arrow" className='w-full h-[315px] md:h-[450px] rounded-3xl mb-8 object-cover' width={100} height={400} />
                  <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                    <div>
                      <p className='text-3xl font-medium'>{member.name}</p>
                      <p className='opacity-70 mt-3'>{member.role}</p>
                    </div>
                    <div className='p-2 rounded-full border border-white border-opacity-20 w-max select-none hover:bg-white hover:bg-opacity-5 transition-all cursor-pointer'>
                      <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <div className='last-background'>
        <Testimonials />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </main>
  )
}

export default AboutPage