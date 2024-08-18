import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function ServicesCard({ title, description, src, alt, slug }) {
  return (
    <div className='col mb-3'>
      <div className="card text-white h-100">
        <div className="card-body card services-card">
          <div className="card-img">
            <div className="services-card-img" >
              <Image height={200} width={300} className='w-100 h-100' src={src} alt={alt} />
            </div>
          </div>
          <h5 className="fs-6 mt-3 py-3">{title}</h5>
          {/* <p className='card-text'>{description}</p> */}
          <Link href={`/services/${slug}`} className='btn btn-outline-light w-full mt-auto'>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard;