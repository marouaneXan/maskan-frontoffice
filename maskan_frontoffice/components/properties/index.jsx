import React, { useContext } from 'react'
import Property from './Property'
import { PropertyContext } from '@/context/property'

const Properties = () => {
  const {properties}=useContext(PropertyContext)
  console.log(properties);
  return (
    <section className='mb-20'>
        <div className="p-[1rem] lg:p-[2rem] mx-auto">
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <Property/>
            </div>
        </div>
    </section>
  )
}

export default Properties