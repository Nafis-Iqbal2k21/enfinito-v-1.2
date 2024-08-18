import React from 'react'

function SingleBanner({title, description, imgUrl, alt}) {
  return (
    <div className='container d-flex justify-center align-items-center home_banner'>
        <div className="row">
            <div className="col-12 col-md-8">
                <h1 className='heading-1 gradient-1'>{title}</h1>
                <p className='text-white'>{description}</p>
            </div>
            <div className="col-12 col-md-4">
                <img className='img-fluid rounded-3' src={imgUrl} alt={alt} />
            </div>
        </div>  
    </div>
  )
}

export default SingleBanner;