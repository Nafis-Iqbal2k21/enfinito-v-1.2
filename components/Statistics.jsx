import React from 'react'
import Chart from './Chart'
import { NumberTransition } from './NumberTransition';

function Statistics() {
    return (
        <div className='container my-5'>
            <div className="col-12 my-2 mx-2">
                 <Chart />
            </div>
            <div className="d-flex gap-4 mx-auto flex-wrap justify-content-center">
                <div className="mx-auto count-up-card">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <NumberTransition end={48} suffix="+" enableScrollSpy duration={3} />
                        <p className="count-up-card-title">Months in Business</p>
                    </div>
                </div>
                <div className="mx-auto count-up-card">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <NumberTransition end={96} suffix="+" enableScrollSpy duration={3} />
                        <p className="count-up-card-title">Happy Clients</p>
                    </div>
                </div>
                <div className="mx-auto count-up-card ">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <NumberTransition end={600} suffix="+" enableScrollSpy duration={3} />
                        <p className="count-up-card-title">Project Done</p>
                    </div>
                </div>
                <div className="mx-auto count-up-card ">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <NumberTransition end={27} enableScrollSpy duration={3} />
                        <p className="count-up-card-title">Team Member</p>
                    </div>
                </div>
                <div className="mx-auto count-up-card ">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <NumberTransition end={98} suffix="%" enableScrollSpy duration={3} />
                        <p className="count-up-card-title">Client Retention Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;