import React from 'react'

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-between py-8 w-[90%] mx-auto'>
      <p>© {currentYear} Algoridam. All rights reserved</p>
      <div>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
        <span className='w-5 h-5 bg-white'></span>
      </div>
    </footer>
  )
}

export default Footer