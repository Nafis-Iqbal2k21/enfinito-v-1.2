import Link from 'next/link';
import React from 'react'

function CaseStudyCard({ otherClassName, url, title, alt, description, link }) {
  return (
    <div className={`col-12 ${otherClassName} case-card rounded-4 mb-3`}>
      <Link href={`/portfolio/${link}`} className='nav-link h-100'>
        <div className="case-content rounded-4">
          <div className='position-relative mx-auto'>
            <img src={url} alt={alt} className='img-fluid rounded-top-4 case-img' />
          </div>
          <h5 className='card-title p-3 pb-0 fw-semibold'>{title}</h5>
          <p className='card-text p-3 description-mini m-0'>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default CaseStudyCard;