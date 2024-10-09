import CaseStudies from "@/components/case-studies";
import SiteHeader from "@/components/header";
import HeroSection from "@/components/hero-section";
import Process from "@/components/process";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <div className="hero-background min-h-screen overflow-hidden">
        <SiteHeader />
        <HeroSection />
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
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
