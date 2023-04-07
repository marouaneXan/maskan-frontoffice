import React from 'react'
import Property from './Property'

const Properties = () => {
  return (
    <section className='mb-20'>
        <div className="container mx-auto">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                <Property/>
            </div>
        </div>
    </section>
  )
}

export default Properties