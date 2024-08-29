import React from 'react'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      name: 'Design',
      description: 'We specialize in creating custom software solutions that empower businesses to achieve their unique goals'
    },
    {
      name: 'Developement',
      description: 'We specialize in delivering robust, scalable, and high-performance software solutions, meticulously developed to meet your unique business needs.'
    },
    {
      name: 'Management',
      description: 'Our comprehensive software management ensures seamless operation, continuous improvement, and proactive maintenance, keeping your systems running at peak efficiency.'
    },
  ];
  
  return (
    <section className='flex flex-col items-center z-20'>
        <h1 className='text-6xl font-medium text-center'>Bold ideas turned into <br /> real achievements</h1>
        <p className='mt-4 text-center tracking-wide opacity-70'>Transforming bold ideas into tangible results takes vision and determination. By <br /> turning ambitious dreams into reality, we achieve significant and lasting impact.</p>
        <div className='mt-16 grid grid-cols-3 gap-4 w-3/4 mx-auto'>
          {
            services.map((service) => (
              <div className='bg-white bg-opacity-5 border border-white border-opacity-20 p-9 rounded-3xl'>
                <div className='p-2 rounded-full border border-white border-opacity-20 mb-8 w-max'>
                  <Image src="/arrow-up-right.svg" alt="arrow" width={28} height={28} layout="intrinsic" />
                </div>
                <p className='text-2xl font-medium mb-2'>{service.name}</p>
                <p className='opacity-70'>{service.description}</p>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Services