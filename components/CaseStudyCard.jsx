import Link from 'next/link';
import React from 'react'

function CaseStudyCard({ otherClassName, url, title, alt, description, link }) {
  return (
    <div className={`col-12 ${otherClassName} case-card rounded-4 mb-3`}>
      <Link href={`/portfolio/${link}`} className='nav-link h-100'>
        <div className="case-content rounded-4">
          <div className='position-relative mx-auto'>
            <img src={url} alt={alt} className='img-fluid rounded-top-4 case-img' />
            <span class="position-absolute top-0 start-0 m-2 rounded-pill border border-1 px-3 py-1">Case Study</span>
          </div>
          <h5 className='card-title p-3 pb-0'>{title}</h5>
          <p className='card-text p-3'>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default CaseStudyCard;