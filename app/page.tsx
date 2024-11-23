'use client'
import CaseStudies from "@/components/case-studies";
import SiteHeader from "@/components/header";
import HeroSection from "@/components/hero-section";
import Process from "@/components/process";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import Image from 'next/image'
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);

  return (
    <main>
      <div className="hero-background min-h-[100dvh] h-[100dvh] overflow-hidden">
        <SiteHeader contactRef={contactRef} />
        <HeroSection />

        <div>
          <Image className='w-full absolute bottom-0 lg:translate-y-[25%]' src="/Ellipse.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
        </div>
      </div>

      <div className="bg-[#0C0222] z-50">
        <Services />
      </div>

      <div className="case-study-background py-[200px]">
        <CaseStudies />
      </div>

      <div className="last-background">
        <Testimonials />
        <Process />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </main>
  );
}
