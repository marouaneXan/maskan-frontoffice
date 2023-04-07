import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import img from '../public/mh-morocco-banner.webp'
import Link from 'next/link'

const PropertyDetails = () => {
    return (
        <Layout>
            <div className='container mx-auto min-h-[800px] mb-14'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'>house name</h2>
                        <h3 className='text-lg mb-4'>house adress</h3>
                    </div>
                    <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                        <div className='bg-green-500 text-white px-3 rounded-full'>house type</div>
                        <div className='bg-violet-500 text-white px-3 rounded-full'>house country</div>
                    </div>
                    <div className='text-3xl font-semibold text-violet-600'>house price</div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <Image src={img} alt="" />
                        </div>
                        <div className='flex gap-x-6 text-violet-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                bed icon
                                <div>5</div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odio modi laudantium reprehenderit eum obcaecati dicta? Ea nobis velit quae.
                            Tempore recusandae laboriosam pariatur itaque voluptates minima amet officia obcaecati.
                        </div>
                    </div>
                    <div className='flex-1 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 bg-white'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                <Image src={img}  alt="" />
                            </div>
                            <div>
                                <div className='font-bold text-lg'>admin name</div>
                                <Link href="" className='text-violet-700 text-sm'>View Listing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PropertyDetails