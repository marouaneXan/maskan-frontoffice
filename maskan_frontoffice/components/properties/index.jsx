import React, { useContext } from 'react'
import Property from './Property'
import { PropertyContext } from '@/context/property'
import Spinner from '../partials/spinner'
import Empty from '../partials/empty'
import Link from 'next/link'

const Properties = () => {
  const { properties, loading, empty } = useContext(PropertyContext)
  return (
    <section className='mb-20'>
      <div className="p-[1rem] lg:p-[2rem] mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {empty ? (
              <Empty empty={empty} />
            ) : (
              <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {properties?.properties?.length && properties.properties.map((property) => (
                  <Link href="/property/[id]" as={`/property/${property._id}`}>
                    <Property property={property} key={property._id} />
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Properties