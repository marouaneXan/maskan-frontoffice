import React, { useContext } from 'react'
import Image from 'next/image'
import { BiBed } from 'react-icons/bi'
import { BiArea } from 'react-icons/bi'
import { PropertyContext } from '@/context/property'
import Spinner from '../partials/spinner'

const Property = ({ property }) => {
    const { loading } = useContext(PropertyContext)
    return (
        <div className='bg-white shadow-1 shadow-violet-400 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition mb-5'>
            {loading ? (
                <Spinner />
            ) : (
                <Image
                    className='rounded-lg rounded-tl-[90px] mb-8'
                    src={property.images[0].url}
                    alt=''
                    width={352}
                    height={100}
                />
            )}
            <div className='mb-4 flex gap-x-2 text-sm'>
                <div className="bg-green-500 rounded-full text-white px-3">
                    {property?.type?.type}
                </div>
                <div className="bg-violet-500 rounded-full text-white px-3">
                    Casablanca
                </div>
            </div>
            <div className="text-lg font-semibold max-w-[260px] ">
                {property?.adress}
            </div>
            <div className='flex gap-x-4 my-4'>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className='text-[20px]'>
                        <BiBed />
                    </div>
                    <div>{property?.bedrooms}</div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className='text-[20px]'>
                        <BiArea />
                    </div>
                    <div>{property?.size}</div>
                </div>
            </div>
            <div className='text-lg font-semibold text-violet-600 mb-4'>{property.price}DH</div>
        </div>
    )
}

export default Property