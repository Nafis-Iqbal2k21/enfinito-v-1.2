import React from 'react'
import Accordion from './Accordion';
import SectionTitle from '../SectionTitle';

function FAQ() {
    const faqData = [
        {
            id: "1",
            question: "Are there any opportunities to work with you?",
            answer: "Certainly! We are always on the lookout for talented individuals. Whether you’re a seasoned professional or just starting your career, we would love to have you working with us. Please explore our career page or click here to learn about all the current job openings we have."
        },
        {
            id: "2",
            question: "How can I apply for a position at Enfinito?",
            answer: "Please visit our Careers page and browse our current job openings. You can submit your application directly through our online portal by following the instructions given there."
        },
        {
            id: "3",
            question: "Do you have any part-time positions?",
            answer: "Yes, we do often have part-time positions. Explore our career page or click here to see all the current job openings at enfinito."
        },
        {
            id: "4",
            question: "Can I work in any remote positions in your organization?",
            answer: "Yes, you can, we believe in providing flexibility to our team members whenever possible. If the position is suited for it, they can work from anywhere in the world. Check out our Careers page or click here for available remote positions."
        },
        {
            id: "5",
            question: "Are there any internship positions at Enfinito?",
            answer: "We do offer internship opportunities with valuable learning experiences for students and recent graduates. Please visit our Careers page or click here to inquire about internship opportunities and application procedures."
        },
    ]
    return (
        <div className='container my-5'>
            <SectionTitle 
                title={"Looking for Answers?"}
                description={"Unlock knowledge with ease quick, reliable answers to all your questions, right at your fingertips."}
            />
            <div className="accordion accordion-flush mt-0" id="accordionFlushExample">
                {
                    faqData.map((data, index) =>
                        <Accordion
                            key={index}
                            id={data.id}
                            question={data.question}
                            answer={data.answer}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FAQ;