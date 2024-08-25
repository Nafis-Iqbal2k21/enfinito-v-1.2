import React from 'react'
import SectionTitle from './SectionTitle';
import Image from 'next/image';

function FounderMessage() {
    return (
        <div>
            <SectionTitle
                title={"Message from the Founder"}
            />
            <div className="container">
                <div className="mb-5 mt-0 rounded-4" style={{ background: "#2C2C2C" }}>
                    <div className="row p-5 d-flex justify-content-center align-items-center" >
                        <div className="col-12 col-md-4 mb-4 text-center">
                            <div className="my-auto mx-auto">
                                <img height={250} width={200} className='rounded-4' src="/assets/images/founder.png" alt='image of founder' />
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="message-box">
                                <p>In the dynamic realm of tech services, Enfinito is more than a provider – we are architects of compelling narratives. Our unwavering commitment is a promise to not just meet but exceed clients' needs, crafting experiences that not only inspire and engage but also contribute to shaping the vibrant tapestry of tomorrow's interconnected world.</p>

                                <h5 className="card-title">Md Rimad Al Rafi</h5>
                                <p className='fs-6 fw-bold'>Founder & CEO <br /> Enfinito</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderMessage;