'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import useLanguageStore from '@/zeustand/languageStore'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Testimonials = () => {
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguageStore();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsContainerRef.current,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: '+=1500',
        scrub: 1,
      },
    });
  
    timeline
      .addLabel('testimonial1')
      .fromTo('.testimonial-1', { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 })
      .addLabel('testimonial2')
      .fromTo(
        '.testimonial-2',
        { yPercent: 100, opacity: 0, zIndex: 1 },
        { yPercent: 0, opacity: 1, duration: 1, zIndex: 2 },
        '+=0.5'
      )
      .to('.testimonial-1', { opacity: 0.7, scale: 0.95 }, '-=0.3')
      .addLabel('testimonial3')
      .fromTo(
        '.testimonial-3',
        { yPercent: 100, opacity: 0, zIndex: 1 },
        { yPercent: 0, opacity: 1, duration: 1, zIndex: 3 },
        '+=0.5'
      )
      .to('.testimonial-2', { opacity: 0.7, scale: 0.95 }, '-=0.3')
      .to('.testimonial-3', { scale: 0.95 }, '-=0.3');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <section
      className='relative flex flex-col items-center h-screen pt-20 mb-[200px] w-[90%] mx-auto max-w-[1440px]'
      ref={testimonialsContainerRef}
    >
      <Image className='absolute left-1/4 top-20 z-0 size-[140px] md:size-[200px] opacity-50 floating-4' src="/bubble2.svg" alt="Bubble 4" width={550} height={50} layout="intrinsic" />

      <h1 className='text-[40px] md:text-6xl max-w-[550px] font-medium text-center leading-snug'>
        {translations.testimonials.heading}
      </h1>
      <p className='mt-4 text-center tracking-wide'>
        {translations.testimonials.intro}
      </p>

      <div className='testimonial testimonial-1 relative mt-[3rem] w-full md:w-3/4 mx-auto bg-[#C54DA4] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
        <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
          <p className='text-xl'>logo</p>
        </div>
        <p className='opacity-70 text-center my-7'>
          &ldquo;{translations.testimonials.testimonial1.quote}&ldquo;
        </p>
        <p className='font-semibold'>{translations.testimonials.testimonial1.name}</p>
        <p className='opacity-70'>{translations.testimonials.testimonial1.position}</p>
      </div>

      <div className='testimonial testimonial-2 absolute mt-[15rem] w-full md:w-3/4 mx-auto bg-[#C54DA4] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
        <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
          <p className='text-xl'>logo</p>
        </div>
        <p className='opacity-70 text-center my-7'>
          &ldquo;{translations.testimonials.testimonial2.quote}&ldquo;
        </p>
        <p className='font-semibold'>{translations.testimonials.testimonial2.name}</p>
        <p className='opacity-70'>{translations.testimonials.testimonial2.position}</p>
      </div>

      <div className='testimonial testimonial-3 absolute mt-[16rem] lg:mt-[17rem] w-full md:w-3/4 mx-auto bg-[#C54DA4] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
        <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
          <p className='text-xl'>logo</p>
        </div>
        <p className='opacity-70 text-center my-7'>
          &ldquo;{translations.testimonials.testimonial3.quote}&ldquo;
        </p>
        <p className='font-semibold'>{translations.testimonials.testimonial3.name}</p>
        <p className='opacity-70'>{translations.testimonials.testimonial3.position}</p>

      </div>
    </section>
  );
};

export default Testimonials;
