'use client'

import React, { useEffect, useState, useRef } from 'react';

const Testimonials = () => {
  const [startShowingTestimonials, setStartShowingTestimonials] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const lastTestimonialRef = useRef<HTMLDivElement>(null);
  const [isLastTestimonialVisible, setIsLastTestimonialVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && testimonialsContainerRef.current && lastTestimonialRef.current) {
        const headerPosition = headerRef.current.getBoundingClientRect().top;
        const lastTestimonialPosition = lastTestimonialRef.current.getBoundingClientRect().top;

        if (headerPosition <= 100) {
          setStartShowingTestimonials(true);
        } else {
          setStartShowingTestimonials(false);
        }

        if (lastTestimonialPosition <= 100) {
          setIsLastTestimonialVisible(true);
        } else {
          setIsLastTestimonialVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='flex flex-col items-center mb-[200px] w-[90%] mx-auto max-w-[1440px]' ref={testimonialsContainerRef}>
      <h1
        ref={headerRef}
        className={`text-[40px] md:text-6xl font-medium text-center leading-snug mt-36 transition-opacity duration-500 ${
          isLastTestimonialVisible ? 'relative top-0' : 'sticky top-14'
        } z-10`}
      >
        Wat klanten zeggen <br className='hidden md:block' /> over ons
      </h1>
      <p
        className={`mt-4 text-center tracking-wide transition-opacity duration-500 ${
          isLastTestimonialVisible ? 'relative' : 'sticky top-48'
        } z-10`}
      >
        Ontdek waarom zij voor Algoridam kozen en hoe software hun levens <br /> heeft veranderd.
      </p>

      {/* Testimonials container */}
      <div className={`grid grid-cols-1 gap-[4vw] py-8 transition-opacity duration-700 ${startShowingTestimonials ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Testimonial 1 */}
        <div className='md:sticky md:top-[100px] flex flex-col items-center py-16' style={{ height: '87vh', paddingTop: 'calc(9 * 1.5em)' }}>
       
          <div className='md:w-3/4 mx-auto bg-[#C54DA4] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
            <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
              <p className='text-xl'>logo</p>
            </div>
            <p className='opacity-70 text-center my-7'>
              &ldquo;Working with Algoridam has been a game-changer for our business. Their custom software solution streamlined our operations, saving us both time and money.&ldquo;
            </p>
            <p className='font-semibold'>John Smith</p>
            <p className='opacity-70'>CEO of Tech Innovators Inc.</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className='md:sticky md:top-[100px] flex flex-col items-center py-16' style={{ height: '87vh', paddingTop: 'calc(10 * 1.5em)' }}>
          <div className='md:w-3/4 mx-auto bg-[#c458a5] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
            <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
              <p className='text-xl'>logo</p>
            </div>
            <p className='opacity-70 text-center my-7'>
              &ldquo;Algoridam's solutions helped us increase our productivity significantly. We now have better control over our processes, thanks to their innovative approach.&ldquo;
            </p>
            <p className='font-semibold'>Jane Doe</p>
            <p className='opacity-70'>COO of Innovative Solutions</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          className='md:sticky md:top-[100px] flex flex-col items-center py-16'
          style={{ height: '87vh', paddingTop: 'calc(11 * 1.5em)' }}
          ref={lastTestimonialRef}
        >
          <div className='md:w-3/4 mx-auto bg-[#b64e98] border border-white border-opacity-20 py-10 px-8 flex items-center justify-center flex-col rounded-[40px] text-xl max-w-[760px]'>
            <div className='py-2 px-8 rounded-full border border-white border-opacity-20'>
              <p className='text-xl'>logo</p>
            </div>
            <p className='opacity-70 text-center my-7'>
              &ldquo;The attention to detail and customer support provided by Algoridam are top-notch. We couldn't have asked for a better partner.&ldquo;
            </p>
            <p className='font-semibold'>Alice Johnson</p>
            <p className='opacity-70'>CTO of Tech Pioneers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
