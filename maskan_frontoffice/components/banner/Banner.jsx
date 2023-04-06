import React from 'react'
import banner from '../../public/mh-morocco-banner.webp'
import Image from 'next/image'
import Search from '../search/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row '>
        <div className='lg:ml-8 xl:ml-[116px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent {' '}</span>Your Dream house With Us
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti tempore
            inventore aut vitae laboriosam laborum nostrum accusamus
            veritatis, non distinctio, laudantium, magni molestiae. Recusandae placeat,
            voluptatum modi dolor aut dolorem!
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <Image src={banner} />
        </div> 
      </div>
      <Search/>
    </section>
  )
}

export default Banner