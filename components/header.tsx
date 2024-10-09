'use client'
import React ,{ useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SiteHeader = () => {
  const [showLang, setShowLang] = useState(false);

  const toggle = () => {
    setShowLang(!showLang);
  }

  return (
    <header className='flex flex-col justify-center items-center pt-6 lg:pt-10 w-[90%] mx-auto sticky z-40'>
      <div className={`absolute left-0 top-0 z-[41] ${showLang ? 'w-screen h-screen' : 'w-0 h-0'}`} onClick={() => setShowLang(false)}></div>

      <nav className="flex lg:grid grid-cols-3 items-center justify-between w-full">
        <ul className='hidden lg:flex gap-7 place-self-start'>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/about'>About us</Link></li>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/work'>Our work</Link></li>
          <li><Link className='linkEffect linkEffect--rightToLeft' href='/services'>Services</Link></li>
        </ul>

        <div className='place-self-center cursor-pointer'>
          <Link href={'/'}>
            <Image src="/algoridam-logo.svg" alt="Algoridam Logo" width={180} height={50} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center gap-8 place-self-end relative'>
          <div className='relative'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => toggle()}>
              <Image src="/uk.svg" alt="chevron" width={24} height={24} />
              <span className='uppercase'>En</span>
              <Image src="/chevron-down.svg" alt="chevron" width={24} height={24} />
            </div>

            <div
              className={`absolute z-20 border border-[#E39CD1] bg-transparent p-3 rounded-xl btn-shadow top-[170%] left-0 w-max transition-all duration-300 ease-in-out ${
                showLang ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <div className='flex items-center gap-2 cursor-pointer mb-1 p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'>
                <Image src="/uk.svg" alt="chevron" width={24} height={24} />
                <span>English</span>
              </div>
              <div className='flex items-center gap-2 cursor-pointer p-1 px-3 rounded-md hover:bg-gray-50 hover:bg-opacity-20 transition-all'>
                <Image src="/nl.svg" alt="chevron" width={24} height={24} />
                <span>Dutch</span>
              </div>
            </div>
          </div>

          <Link href={''}>
            <button className='border border-[#E39CD1] bg-transparent py-3 px-6 rounded-full btn-shadow'>
              Let&rsquo;s talk
            </button>
          </Link>
        </div>

        <div className='block lg:hidden'>
            <p>ham</p>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader