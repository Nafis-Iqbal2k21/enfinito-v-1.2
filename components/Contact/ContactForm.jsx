import React from 'react'

function ContactForm() {
    return (
        <div className='col-12 col-md-6'>
            <h1 className="h2">Let’s Bring Your Vision to Life!</h1>
            <p className='description-mini w-75 ms-0'>Partner with us to ignite your business potential and achieve remarkable success.</p>
            <div className=" mt-5 mt-md-0">
                <form action="/" method="post">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <input type="text" className="form-control mb-3" placeholder="Your Name" />
                        </div>
                        <div className="col-12 col-md-6">
                            <input type="number" className="form-control mb-3" placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <input type="email" className="form-control mb-3" placeholder="Your Email" />
                    <input type="text" className="form-control mb-3" placeholder="Subject" />
                    <textarea className="form-control mb-3" placeholder="Your Message"
                        style={{height: "190px"}}></textarea>
                    <input type="submit" className="btn contact-btn w-100" value="Send Message" />
                </form>
            </div>
        </div>
    )
}

export default ContactForm;