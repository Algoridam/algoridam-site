import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SiteHeader from '@/components/header';
import Process from '@/components/process';
import Services from '@/components/services';
import React from 'react';

const ServicesPage = () => {
  return (
    <main className='min-h-screen'>
      <div className='case-study-background'>
        <SiteHeader />
        <div className='pb-[20px] flex flex-col gap-[200px]'>
          <Services isServicesPage={true} />
          <Process />
        </div>
      </div>
      <div className="last-background">
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default ServicesPage