import React from 'react'
import SectionTitle from './SectionTitle';

function ChooseUs() {
    return (
        <div className="container">
            <SectionTitle
                title={"Why Choose us"}
                description={"Discover how our solutions have made a real difference for our clients through their genuine feedback and success stories."}
            />
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className='col-12 col-md-6'>
                    <ul className="timeline">
                        <li>
                            <img src="/assets/icons/low.png" alt="low_price_icon" className='timeline-icon' />
                            <h5 className="card-title">1. Effective & Flexible Pricing</h5>
                            <p className='description-mini'>As clients want their business have profit maximization with minimum costs, we help small and large business owners accomplish these goals with efficient and flexible pricing schemes. We offer to provide best outcomes at budget friendly rate.</p>
                        </li>
                        <li>
                            <img src="/assets/icons/bedge.png" alt="bedge_icon" className='timeline-icon-bedge' />
                            <h5 className="card-title">2. Quality Assuranc</h5>
                            <p className='description-mini'>We design to the ultimate creativity which can elaborate vision and leads to the authentic outcomes. Along we serve authentic design and the best digital marketing service to help businesses grow better everyday.</p>
                        </li>
                        <li>
                            <img src="/assets/icons/shield.png" alt="shield_icon" className='timeline-icon' />
                            <h5 className="card-title">3. Reliabilit</h5>
                            <p className='description-mini'>We are highly valued as a trustworthy partner by our client. We help our clients to bring out their business growth, believe in our expertise & experience positively.</p>
                        </li>
                        <li>
                            <img src="/assets/icons/security.png" alt="security_icon" className='timeline-icon' />
                            <h5 className="card-title">4. Remote Service Accessibilit</h5>
                            <p className='description-mini'>With remote support services, users can also resolve issues with consistent guidance from experts. As we offer remote services, we serve our clients anywhere in Bangladesh which can reduce organization's operational costs, workplace costs and so on.</p>
                        </li>
                        <li>
                            <img src="/assets/icons/group.png" alt="group_icon" className='timeline-icon' />
                            <h5 className="card-title">5. Passionate in-house Team</h5>
                            <p className='description-mini'>Our team consists of highly professional designers with a diversity of skills and experience. Every member contributes positively to the company and is an asset to our clients because they are able to create client’s story visible throughout their works which help the organization reach its objectives.</p>
                        </li>
                        <li>
                            <img src="/assets/icons/document.png" alt="document_icon" className='timeline-icon' />
                            <h5 className="card-title">6. Periodic Feedback & Reporting</h5>
                            <p className='description-mini'>As a client of Enfinito, you are entitled to receive feedback and reports on a 24 hour basis. Work with Enfinito and feel the difference. Our senior designers and dedicated project managers are ready to provide their best.</p>
                        </li>

                    </ul>
                </div>
                <div className='col-12 col-md-6 my-auto h-100'>
                    <div className="solar-system">
                        <div id="sun">
                            <img className='sun' src="/assets/icons/enfinito.png" />
                        </div>

                        <div className="orbit mercury-orbit"></div>
                        <div className="mercury-spin">
                            <img id="mercury" src="/assets/icons/low.png" />
                        </div>

                        <div className="orbit venus-orbit"></div>
                        <div className="venus-spin">
                            <img id="venus" src="/assets/icons/shield.png" />
                        </div>

                        <div className="orbit earth-orbit"></div>
                        <div className="earth-spin">
                            <img id="earth" src="/assets/icons/bedge.png" />
                            <img id="earth2" src="/assets/icons/group.png" />
                        </div>

                        <div className="orbit mars-orbit"></div>
                        <div className="mars-spin">
                            <img id="earth" src="/assets/icons/security.png" />
                            <img id="mars" src="/assets/icons/document.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;