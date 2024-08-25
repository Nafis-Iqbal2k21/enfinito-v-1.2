import React from 'react'

function WorkCard({ title, description }) {
    return (
        <div className="col-12 col-md-4 mb-4 ">
            <div className='work-card p-3 rounded-3 h-100 rainbow'>
                <p className='title fw-semibold'>{title}</p>
                <p className='description-mini fw-normal'>{description}.</p>
            </div>
        </div>
    )
}

export default WorkCard;