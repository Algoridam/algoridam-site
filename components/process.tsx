'use client'
import React, { useState, useRef, MouseEvent } from 'react';

const Process = () => {
  const processes = [
    {
      name: 'Project Request',
      description: 'Our collaboration begins with your project request, which provides clarity on your needs and allows me to assess our compatibility. If aligned, we will arrange a video call to explore further details.'
    },
    {
      name: 'First Meeting',
      description: 'Building trust is paramount in our collaboration. During our first meeting, we focus on getting acquainted to determine compatibility, discuss your goals and requirements, address any queries, and outline the subsequent steps forward.'
    },
    {
      name: 'First Meeting',
      description: 'Building trust is paramount in our collaboration. During our first meeting, we focus on getting acquainted to determine compatibility, discuss your goals and requirements, address any queries, and outline the subsequent steps forward.'
    }
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className='flex flex-col items-center pb-[180px]'>
      <h1 className='text-6xl font-medium text-center'>Our Process</h1>
      <p className='mt-4 text-center tracking-wide opacity-70'>We specialize in creating custom software solutions that empower <br /> businesses to achieve their unique goals.</p>
      <div 
        className='mt-16 pl-32 pr-4 flex gap-4 overflow-auto w-full mx-auto cursor-grab pb-5'
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {
          processes.map((process, index) => (
            <div key={index} className='flex items-center gap-10 bg-white bg-opacity-5 border border-white border-opacity-20 p-9 rounded-[48px] min-w-[540px] select-none'>
              <p className='text-[144px] font-medium'>{index + 1}</p>
              <div>
                <p className='text-2xl font-medium'>{process.name}</p>
                <p className='opacity-70 mt-4'>{process.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Process;
