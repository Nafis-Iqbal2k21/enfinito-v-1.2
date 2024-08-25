import React from 'react'

function Brand({src, alt, height, width}) {
  return (
    <div className='col-6 col-md-2'>
        <div className="brand-img text-center bg-light rounded-4 m-2">
            <img height={height} width={width} src={src} alt={alt}  />
        </div>
    </div>
  )
}

export default Brand;