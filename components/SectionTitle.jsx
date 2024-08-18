import React from 'react'

function SectionTitle({title, description}) {
  return (
    <div className='py-5'>
        <h2 className="heading-2 text-center section-title">{title}</h2>
        {
          description ? <p className='text-center gradient-2'>{description}</p> : null 
        }    
    </div>
  )
}

export default SectionTitle;