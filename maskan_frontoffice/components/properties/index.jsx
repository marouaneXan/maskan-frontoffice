import React, { useContext } from 'react'
import Property from './Property'
import { PropertyContext } from '@/context/property'
import Spinner from '../partials/spinner'

const Properties = () => {
  const { properties, loading } = useContext(PropertyContext)
  return (
    <section className='mb-20'>
      <div className="p-[1rem] lg:p-[2rem] mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {properties?.properties?.length && properties.properties.map((property) => (
              <Property property={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Properties