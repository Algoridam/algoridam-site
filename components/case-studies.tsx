import React from 'react'
import Image from 'next/image'

const CaseStudies = () => {
  const caseStudies = [
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Platr',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
  ];

  return (
    <section className='flex flex-col items-center relative'>
        <Image className='absolute top-1/2 left-1/4 z-0 w-[400px] h-[400px] opacity-50 floating-3' src="/bubble1.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />
        <Image className='absolute top-1/2 left-1/4 z-0 w-[213px] h-[213px] opacity-50 floating-2' src="/bubble3.svg" alt="Vercel Logo" width={550} height={50} layout="intrinsic" />

        <h1 className='text-6xl font-medium text-center'>Explore Our Case Studies</h1>
        <p className='mt-4 text-center tracking-wide opacity-70'>Discover our case studies to delve into real-world examples of our work. <br /> Gain insights and inspiration from our documented successes.</p>
        <div className='mt-16 grid grid-cols-2 gap-14 w-3/4 mx-auto'>
          {
            caseStudies.map((study, index) => (
              <div key={index} className='bg-white bg-opacity-5 border border-white border-opacity-20 p-9 rounded-[48px] z-10'>
                <Image src="/sample-image.png" alt="arrow" className='w-full h-full rounded-3xl mb-8 object-contain' width={100} height={200} layout="intrinsic" />
                <div className='flex items-center justify-between w-full'>
                  <p className='text-2xl font-medium'>{study.name}</p>
                  <div className='p-2 rounded-full border border-white border-opacity-20 w-max'>
                    <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                  </div>
                </div>
                <p className='opacity-70 mt-4'>{study.description}</p>
              </div>
            ))
          }
        </div>
        <button className="bg-[#0C0222] border-[1.5px] border-[#E39CD1] border-opacity-50 py-5 px-14 rounded-full mt-14">See all cases</button>
    </section>
  )
}

export default CaseStudies