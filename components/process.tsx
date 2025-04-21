'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLanguageStore from '@/zeustand/languageStore';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { translations } = useLanguageStore();
  const processesContainerRef = useRef<HTMLDivElement>(null);
  const processesWrapperRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      const ctx = gsap.context(() => {
        const processes = gsap.utils.toArray('.process');
        const xPercent = windowWidth >= 1024 ? -50 : -100 * (processes.length - 1);

        gsap.to(processesWrapperRef.current, {
          xPercent: xPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: processesContainerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: '+=600',
          },
        });
      }, processesContainerRef);

      return () => ctx.revert();
    }
  }, [windowWidth]);

  return (
    <section
      ref={processesContainerRef}
      className="relative flex flex-col items-center pt-32 md:h-screen w-full mx-auto mb-[200px] md:mb-0 overflow-x-hidden md:overflow-auto"
    >
      <h1 className="text-[40px] md:text-6xl font-medium text-center leading-snug">
        {translations.processes.heading}
      </h1>
      <p className="mt-4 text-center tracking-wide">
        {translations.processes.intro}
      </p>

      <div className="w-full md:overflow-hidden mt-10 md:mt-16">
        <div
          ref={processesWrapperRef}
          className="flex flex-col md:flex-row gap-8 md:gap-10 h-full w-[90%] mx-auto"
        >
          <div className="process flex-shrink-0 h-max md:h-[280px] flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10 backdrop-blur-[292px] border border-white border-opacity-20 p-10 rounded-[40px] text-xl w-full max-w-[600px]">
          <p className="text-[68px] leading-[50px] md:text-[144px] font-medium">1.</p>
            <div>
              <p className="text-2xl font-medium">
                {translations.processes.process1.name}
              </p>
              <p className="opacity-70 mt-4">
                {translations.processes.process1.description}
              </p>
            </div>
          </div>

          <div className="process flex-shrink-0 h-max md:h-[280px] flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10 backdrop-blur-[292px] border border-white border-opacity-20 p-10 rounded-[40px] text-xl w-full max-w-[600px]">
            <p className="text-[68px] leading-[50px] md:text-[144px] font-medium">2.</p>
            <div>
              <p className="text-2xl font-medium">
                {translations.processes.process2.name}
              </p>
              <p className="opacity-70 mt-4">
                {translations.processes.process2.description}
              </p>
            </div>
          </div>

          <div className="process flex-shrink-0 h-max md:h-[280px] flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10 backdrop-blur-[292px] border border-white border-opacity-20 p-10 rounded-[40px] text-xl w-full max-w-[600px]">
          <p className="text-[68px] leading-[50px] md:text-[144px] font-medium">3.</p>
            <div>
              <p className="text-2xl font-medium">
                {translations.processes.process3.name}
              </p>
              <p className="opacity-70 mt-4">
                {translations.processes.process3.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
