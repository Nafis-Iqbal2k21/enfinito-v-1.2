"use client"
import React from 'react'

function Accordion({ id, question, answer }) {
    return (
        <div className="accordion-item accordion-bg-dark my-2 border-0">
            <h2 className="accordion-header" id={`flush-heading${id}`}>
                <button className="accordion-button collapsed text-white rounded-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
                    {question}
                </button>
            </h2>
            <div id={`flush-collapse${id}`} className="accordion-collapse collapse text-white bg-dark" aria-labelledby={`flush-heading${id}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{answer}</div>
            </div>
        </div>
    )
}

export default Accordion;