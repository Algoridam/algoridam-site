'use client'
import React, { useState, useRef, MouseEvent } from 'react';
import SiteHeader from '@/components/header'
import Image from 'next/image'
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const AboutPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400; // Amount to scroll when clicking the arrows

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
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
    const walk = (x - startX) * 2; // Scroll speed
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

  const data = [
    {
      name: 'Mission',
      description: 'Our software design services bring your vision to life with intuitive, user-friendly interfaces and cutting-edge aesthetics tailored to your brand.'
    },
    {
      name: 'Vision',
      description: 'We specialize in delivering robust, scalable, and high-performance software solutions, meticulously developed to meet your unique business needs.'
    },
    {
      name: 'Value',
      description: 'Our comprehensive software management ensures seamless operation, continuous improvement, and proactive maintenance, keeping your systems running at peak efficiency.'
    },
  ];

  const caseStudies = [
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
  ];

  return (
    <main className='about-shadow-1'>
      <SiteHeader />

      <section className='py-[100px] text-center'>
        <div>
          <h1 className='text-6xl mb-4'>Meet Our Small Team</h1>
          <p className='opacity-70 text-xl font-light leading-8'>We are a team of experts from various locations across <br /> Europe and West Africa.</p>
          <button className='border border-[#E39CD1] bg-[#330658] py-4 px-7 text-lg rounded-full mt-8 btn-shadow'>
            Start a project
          </button>
        </div>
        <div className='w-[90%] max-w-[1024px] h-[515px] mx-auto my-14'>
          <Image src="/sample-image.png" alt="arrow" className='w-full h-full rounded-3xl mb-8 object-cover' width={100} height={500} layout="" />
        </div>
        <p className='opacity-70 text-center text-xl font-light leading-8'>
          Transforming bold ideas into tangible results takes vision and determination. By turning ambitious <br /> dreams 
          into reality, we achieve significant and lasting impact. Transforming bold ideas into tangible <br /> results takes 
          vision and determination. By turning ambitious dreams into reality, we achieve significant <br /> and lasting impact.
          Transforming bold ideas into tangible results takes vision and determination. By <br /> turning ambitious dreams into 
          reality, we achieve significant and lasting impact.
        </p>
      </section>

      <section className='py-[160px] about-shadow-2'>
        <h1 className='text-6xl text-center'>Why Algoridam</h1>
        <div className='mt-16 grid grid-cols-3 gap-4 w-3/4 mx-auto'>
          {
              data.map((service) => (
                <div className='bg-white bg-opacity-5 border border-white border-opacity-20 p-9 rounded-3xl'>
                  <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max'>
                    <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                  </div>
                  <p className='text-2xl font-medium mb-2'>{service.name}</p>
                  <p className='opacity-70'>{service.description}</p>
                </div>
              ))
            }
          </div>
      </section>

      <section className='py-[200px] case-study-background'>
        <div className='flex justify-between w-[90%] max-w-7xl mx-auto'>
          <h1 className='text-6xl'>Who You're Getting <br /> Into Business With</h1>
          <div className='flex items-center gap-5'>
            <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max cursor-pointer select-none hover:bg-white hover:bg-opacity-5 transition-all' onClick={onscrollLeft}>
              <Image src="/arrow-left.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
            </div>
            <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max cursor-pointer select-none hover:bg-white hover:bg-opacity-5 transition-all' onClick={onscrollRight}>
              <Image className='-scale-x-100' src="/arrow-left.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
            </div>
          </div>
        </div>
        <div 
          className='mt-16 pl-20 pr-4 flex gap-10 overflow-auto w-full mx-auto cursor-grab pb-5'
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {
            caseStudies.map((study) => (
              <div className='bg-white bg-opacity-5 border border-white border-opacity-20 p-9 rounded-[48px] min-w-[460px]'>
                <Image src="/sample-image.png" alt="arrow" className='w-full h-[450px] rounded-3xl mb-8 object-cover' width={100} height={400} />
                <div className='flex items-center justify-between w-full'>
                  <p className='text-2xl font-medium'>{study.name}</p>
                  <div className='flex items-center gap-2'>
                    <div className='p-2 rounded-full border border-white border-opacity-20 w-max select-none hover:bg-white hover:bg-opacity-5 transition-all'>
                      <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                    </div>
                    <div className='p-2 rounded-full border border-white border-opacity-20 w-max select-none hover:bg-white hover:bg-opacity-5 transition-all'>
                      <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                    </div>
                  </div>
                </div>
                <p className='opacity-70 mt-4'>{study.description}</p>
              </div>
            ))
          }
        </div>
      </section>

      <div className='last-background'>
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default AboutPage