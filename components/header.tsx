import React from 'react'
import Image from 'next/image';

const SiteHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-20 items-center justify-center">
        <li>Home</li>
        <li>Services</li>
        <li>
          {/* Adjusting Image component for responsiveness might need additional CSS or inline styles if the component doesn't directly support Tailwind's responsive classes */}
          <Image src="/algoridam-logo.svg" alt="Vercel Logo" width={250} height={50} layout="intrinsic" />
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <hr className='w-3/4 md:w-1/2 mt-3' />
    </div>
  )
}

export default SiteHeader