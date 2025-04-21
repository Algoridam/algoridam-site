'use client'
import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SiteHeader from '@/components/header';
import Testimonials from '@/components/testimonials';
import React, { useRef } from 'react';

const WorkPage = () => {
  const contactRef = useRef<HTMLElement>(null);

  return (
    <main className='min-h-screen'>
      <div className='case-study-background'>
        <SiteHeader contactRef={contactRef} />
        <div className='py-[120px]'>
          <CaseStudies />
        </div>
      </div>
      <div className="last-background">
        <Testimonials />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </main>
  )
}

export default WorkPage