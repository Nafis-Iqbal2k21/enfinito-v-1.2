import Image from 'next/image';
import React from 'react'

function Brand({src, alt}) {
  return (
    <div className='col-6 col-md-2'>
        <div className="brand-img text-center bg-light rounded-4 m-2">
            <Image height={100} width={100} src={src} alt={alt}  />
        </div>
    </div>
  )
}

export default Brand;