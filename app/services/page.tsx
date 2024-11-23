'use client'
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SiteHeader from '@/components/header';
import Process from '@/components/process';
import Services from '@/components/services';
import React, { useRef } from 'react';

const ServicesPage = () => {
  const contactRef = useRef<HTMLElement>(null);

  return (
    <main className='min-h-screen'>
      <div className='case-study-background'>
        <SiteHeader contactRef={contactRef} />
        <div className='pb-[20px] flex flex-col gap-[200px]'>
          <Services isServicesPage={true} />
        </div>
        <Process />
      </div>
      <div className="last-background">
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </main>
  )
}

export default ServicesPage