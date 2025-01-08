'use client'
import React ,{ useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import useLanguageStore from '@/zeustand/languageStore';

const SiteHeader = ({ contactRef }: { contactRef: React.RefObject<HTMLElement> }) => {
  const { language, switchLanguage, translations } = useLanguageStore();
  const [showLang, setShowLang] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggle = () => {
    setShowLang(!showLang);
  }

  const handleLanguageToggle = (lang: 'en' | 'nl') => {
    if (!showLang) return;
    switchLanguage(lang);
    toggle();
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
    
    return () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <header className='flex flex-col justify-center items-center pt-6 lg:pt-10 w-[90%] mx-auto sticky z-40'>
      <div className={`absolute left-0 top-0 z-[41] ${showLang && !showMobileMenu ? 'w-screen h-screen' : 'w-0 h-0'}`} onClick={() => setShowLang(false)}></div>

      <nav className="flex lg:grid grid-cols-3 items-center justify-between w-full">
        <ul className='hidden lg:flex gap-7'>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/'>Home</Link></li>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/about'>{translations.aboutUs}</Link></li>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/work'>{translations.ourWork}</Link></li>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/services'>{translations.servicesLink}</Link></li>
        </ul>

        <div className='place-self-center cursor-pointer'>
          <Link href={'/'}>
            <Image src="/algoridam-logo.svg" alt="Algoridam Logo" width={180} height={50} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center gap-8 place-self-end relative'>
          <div className='relative'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => toggle()}>
              <Image src={language === 'en' ? '/uk.svg' : '/nl.svg'} alt="chevron" width={24} height={24} />
              <span className='uppercase'>{language}</span>
              <Image src="/chevron-down.svg" alt="chevron" width={24} height={24} />
            </div>

            <div
              className={`absolute z-[42] border border-[#E39CD1] bg-transparent p-3 rounded-xl btn-shadow top-[170%] left-0 w-max transition-all duration-300 ease-in-out ${
                showLang ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <div
                className='flex items-center gap-2 cursor-pointer mb-1 p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'
                onClick={() => handleLanguageToggle('en')}
              >
                <Image src="/uk.svg" alt="chevron" width={24} height={24} />
                <span>English</span>
              </div>
              <div
                className='flex items-center gap-2 cursor-pointer p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'
                onClick={() => handleLanguageToggle('nl')}
              >
                <Image src="/nl.svg" alt="chevron" width={24} height={24} />
                <span>Dutch</span>
              </div>
            </div>
          </div>

          <button
            className='border border-[#E39CD1] bg-transparent py-3 px-6 rounded-full btn-shadow'
            onClick={scrollToContact}
          >
            {translations.letsTalk}
          </button>
        </div>

          <div className={`mobileMenu-bg lg:hidden fixed inset-0 h-screen w-screen text-white pb-[70px] pt-4 z-40 transition-all duration-300 ease-in-out ${
            showMobileMenu
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}>
            <div className='w-[90%] mx-auto h-full flex flex-col justify-between'>
              <div className={`absolute left-0 top-0 z-[41] ${showLang && showMobileMenu ? 'w-screen h-screen' : 'w-0 h-0'}`} onClick={() => setShowLang(false)}></div>

              <div className='flex items-center justify-between py-2'>
                <Link href={'/'}>
                  <Image src="/algoridam-logo.svg" alt="Algoridam Logo" width={180} height={50} />
                </Link>
                <button onClick={toggleMobileMenu} className="p-2">
                  <Image src="/close.svg" alt="Menu" width={24} height={24} />
                </button>
              </div>

              <ul className='text-center text-2xl'>
                <li>
                  <Link className="block mb-14" href="/">Home</Link>
                </li>
                <li>
                  <Link className="block mb-14" href="/about">{translations.aboutUs}</Link>
                </li>
                <li>
                  <Link className="block mb-14" href="/work">{translations.ourWork}</Link>
                </li>
                <li>
                  <Link className="block mb-14" href="/services">{translations.servicesLink}</Link>
                </li>
              </ul>

              <div className='text-center flex flex-col gap-4'>
                <Link href={''}>
                  <button className='border border-[#E39CD1] bg-transparent py-3 px-6 w-full rounded-full btn-shadow'>
                    {translations.letsTalk}
                  </button>
                </Link>

                <div className='relative self-center'>
                  <div className='flex items-center gap-2 cursor-pointer' onClick={() => toggle()}>
                    <Image src="/uk.svg" alt="chevron" width={24} height={24} />
                    <span className='uppercase'>{language}</span>
                    <Image src="/chevron-down.svg" alt="chevron" width={24} height={24} />
                  </div>

                  <div
                    className={`absolute z-0 border border-[#E39CD1] bg-transparent p-3 rounded-xl btn-shadow -top-44 left-0 -translate-x-5 w-max transition-all duration-300 ease-in-out ${
                      showLang && showMobileMenu ? 'opacity-100 z-[42]' : 'opacity-0'
                    }`}
                  >
                    <div
                      className='flex items-center gap-2 cursor-pointer mb-1 p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'
                      onClick={() => handleLanguageToggle('en')}
                    >
                      <Image src="/uk.svg" alt="chevron" width={24} height={24} />
                      <span>English</span>
                    </div>
                    <div
                      className='flex items-center gap-2 cursor-pointer p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'
                      onClick={() => handleLanguageToggle('nl')}
                    >
                      <Image src="/nl.svg" alt="chevron" width={24} height={24} />
                      <span>Dutch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            <Image src="/hamburger.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader