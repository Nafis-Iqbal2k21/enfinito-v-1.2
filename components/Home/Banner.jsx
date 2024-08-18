import React from 'react'

function Banner() {
    return (
        <div className="container home_banner d-flex flex-column align-items-center justify-content-center   my-auto">
            <h4 className='heading-4 gradient-1 text-center'>Spark Your Business Growth with</h4>
            <h1 className='heading-1 gradient-1 text-center'>Innovative SMM & Tech Solutions</h1>
            <p className='text-center gradient-2'>Enfinito leads the way in SMM and tech innovation, delivering top-tier, customized solutions. Our client-centric approach and cutting-edge technology ensure we exceed your expectations with reliable, high-quality services.</p>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                <button className="btn btn-outline-light fw-bold border-2 px-4 mx-2 mb-2 ">About us</button>
                <button className="btn btn-outline-light fw-bold border-2 px-4 mx-2 mb-2">Contact us</button>
            </div>
        </div> 
    )
}

export default Banner;