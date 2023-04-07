import React from 'react'
import imge from '../../public/mh-morocco-banner.webp'
import Image from 'next/image'
import { BiBed } from 'react-icons/bi'
import {BiArea} from 'react-icons/bi'

const Property = () => {
    return (
        <div className='bg-white shadow-1 shadow-violet-400 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition mb-5'>
            <Image className='rounded-lg rounded-tl-[90px] mb-8' src={imge} alt="" />
            <div className='mb-4 flex gap-x-2 text-sm'>
                <div className="bg-green-500 rounded-full text-white px-3">
                    House
                </div>
                <div className="bg-violet-500 rounded-full text-white px-3">
                    Casablanca
                </div>
            </div>
            <div className="text-lg font-semibold max-w-[260px] ">
                adress
            </div>
            <div className='flex gap-x-4 my-4'>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className='text-[20px]'>
                        <BiBed />
                    </div>
                    <div>6</div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className='text-[20px]'>
                        <BiArea />
                    </div>
                    <div>6</div>
                </div>
            </div>
            <div className='text-lg font-semibold text-violet-600 mb-4'>123DH</div>
        </div>
    )
}

export default Property