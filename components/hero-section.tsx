import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            <Image className='absolute z-50' src="/bubble 1 1.svg" alt="Vercel Logo" width={250} height={50} layout="intrinsic" />
            <div className='text-center text-6xl mt-24 mb-4'>
                Lorem ipsum dolor sit amet <br /> consectetur
            </div>
            <Image className='absolute z-50 left-9' src="/bubble 2 1.svg" alt="Vercel Logo" width={250} height={50} layout="intrinsic" />
            <div className='text-center mb-4'>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
            </div>
            {/* Center the Hero dropdown */}

        </>
    )
}

export default HeroSection