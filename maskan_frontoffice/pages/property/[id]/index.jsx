import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import img from '../../../public/mh-morocco-banner.webp'
import { endpoint } from "@/config";
import axios from 'axios'
import { useRouter } from 'next/router';
import { BiBed } from 'react-icons/bi'
import { BiArea } from 'react-icons/bi'
import Spinner from '@/components/partials/spinner';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Property = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState()
    const [loading, setLoading] = useState(false)
    const getPropertDetails = async () => {
        setLoading(true)
        const res = await axios.get(`${endpoint}/properties/${id}`)
        if (res && res.data) {
            setLoading(false)
            setProperty(res.data);
        }
    }
    useEffect(() => {
        getPropertDetails()
    }, [])

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? property?.images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === property?.images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <Layout>
            {loading ? (
                <Spinner />
            ) : (
                <div className='container mx-auto min-h-[800px] mb-14'>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                        <div>
                            <h2 className='text-2xl font-semibold'>{property?.title}</h2>
                            <h3 className='text-lg mb-4'>{property?.adress}</h3>
                        </div>
                        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                            <div className='bg-green-500 text-white px-3 rounded-full'>{property?.type?.type}</div>
                            <div className='bg-green-500 text-white px-3 rounded-full'>{property?.category?.category}</div>
                            <div className='bg-violet-500 text-white px-3 rounded-full'>{property?.city}</div>
                        </div>
                        <div className='text-3xl font-semibold text-violet-600'>{property?.price}DH</div>
                    </div>
                    <div className='flex flex-col items-start gap-8 lg:flex-row'>
                        <div className='max-w-[768px]'>
                            <div className='h-[680px] w-full m-auto py-2 relative group'>
                                <div
                                    style={{ backgroundImage: `url(${property?.images[currentIndex]?.url})` }}
                                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                                ></div>
                                {/* Left Arrow */}
                                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                                </div>
                                {/* Right Arrow */}
                                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                                </div>
                            </div>
                            <div className='flex gap-x-6 text-violet-700 mb-6'>
                                <div className='flex gap-x-2 items-center'>
                                    <BiBed />
                                    <div>{property?.bedrooms}</div>
                                </div>
                                <div className='flex gap-x-2 items-center'>
                                    <BiArea />
                                    <div>{property?.size}</div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl mb-2'>Description: </h1>
                            <div>
                                {property?.desc}
                            </div>
                            </div>
                        </div>
                        <div className='flex-1 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 bg-white'>
                            <div className='flex items-center gap-x-4 mb-8'>
                                <div>
                                    <div className='font-bold text-lg'>Marouane ZAHAOUI</div>
                                    <div className='text-violet-700 text-sm'>0603860541</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}


export default Property