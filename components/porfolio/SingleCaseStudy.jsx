import React from 'react'

function SingleCaseStudy({data}) {
    return (
        <div className='container'>
            <img src={data.image} alt={data.alt} className='img-fluid my-3 rounded-3 case-thumbnail' />
            <h1 className='h2'>{data.title}</h1>
            {
                data.content.map((data, index) =>
                    <div key={index}>
                        <h4 className="card-title my-3">{data.title}</h4>
                        <p className="card-text">{data.description}</p>
                        {
                            data.content &&
                            data.content.map((data, index) =>
                                <div className="m-3" key={index}>
                                    <h6 className="h6">{index + 1}. {data.title}</h6>
                                    <p className='card-text'>{data.description}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default SingleCaseStudy;