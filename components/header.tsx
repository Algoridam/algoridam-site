import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SiteHeader = () => {
  return (
    <header className='flex flex-col justify-center items-center pt-10 w-[90%] mx-auto'>
      <nav className="grid grid-cols-3 items-center justify-between w-full">
        <ul className='flex gap-7 place-self-start'>
          <li><Link className='cursor-pointer hover:underline' href='/about'>About us</Link></li>
          <li><Link className='cursor-pointer hover:underline' href='/work'>Our work</Link></li>
          <li><Link className='cursor-pointer hover:underline' href='/services'>Services</Link></li>
        </ul>
          <div className='place-self-center cursor-pointer'>
            <Link href={'/'}>
              <Image src="/algoridam-logo.svg" alt="Algoridam Logo" width={180} height={50} />
            </Link>
          </div>
        <div className='flex items-center gap-8 place-self-end'>
          <button className='border border-[#E39CD1] bg-transparent py-3 px-6 rounded-full btn-shadow'>
            Let&rsquo;s talk
          </button>
          <div className='flex items-center gap-2'>
            <span className='uppercase'>En</span>
            <span>v</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader