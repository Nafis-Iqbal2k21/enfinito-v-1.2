import Link from 'next/link';
import React from 'react'

function Banner() {
    return (
        <div className='container career_banner mt-5 pt-5'>
            <div className="row">
                <div className="col-12 col-md-8">
                    <h2 className='heading-2 gradient-1'>Career With</h2>
                    <h1 className='heading-1 gradient-1'>Enfinito Group</h1>
                    <p className='text-white w-75'>Are you looking for a career with freedom, flexibility, and creativity? Then you are in the right place!</p>
                    <Link href={'/careers'} className='btn btn-outline-light'>Join Our Team</Link>
                </div>
                <div className="col-12 col-md-4">
                    <img className='img-fluid rounded-3' src='/assets/images/founder.png' alt="career" />
                </div>
            </div>
        </div>
    )
}

export default Banner;