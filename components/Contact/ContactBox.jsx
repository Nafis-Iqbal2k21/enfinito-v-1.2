import React from 'react'
import ContactForm from './ContactForm';
import Banner from './Banner';

function ContactBox() {
  return (
    <div className='container d-flex justify-content-center align-items-center my-5'>
        <div className="row p-4 contact-box">
            <ContactForm />
            <Banner />
        </div>

    </div>
  )
}

export default ContactBox;