'use client'
import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SiteHeader from '@/components/header';
import Testimonials from '@/components/testimonials';
import React from 'react';

const WorkPage = () => {
  return (
    <main className='min-h-screen'>
      <div className='case-study-background'>
        <SiteHeader />
        <div className='py-[120px]'>
          <CaseStudies />
        </div>
      </div>
      <div className="last-background">
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default WorkPage