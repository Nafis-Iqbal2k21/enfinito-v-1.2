import React from 'react'
import SectionTitle from '../SectionTitle';
import Link from 'next/link';

function Jobs() {
    const jobData = [
        {
            position: "Graphics Designer",
            address: "Remote",
            salary: "Negotiable",
            applyDeadline: "12 March,2025"
        },
        {
            position: "Video Editor",
            address: "Remote",
            salary: "Negotiable",
            applyDeadline: "12 March,2025"
        },
        {
            position: "Frontend Developer",
            address: "Remote",
            salary: "Negotiable",
            applyDeadline: "12 March,2025"
        },
        {
            position: "Backend Developer",
            address: "Remote",
            salary: "Negotiable",
            applyDeadline: "12 March,2025"
        },
        {
            position: "Digital Marketer",
            address: "Remote",
            salary: "Negotiable",
            applyDeadline: "12 March,2025"
        },

    ]
    return (
        <div className="job-bg py-5">
            <div className='container'>
                <SectionTitle
                    title={"Current Job Opening"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.quae sequi sed nemo!"}
                />
                {
                    jobData.map((data, index) =>
                        <div className='container mx-auto job-card row row-cols-1 row-cols-md-5 py-3 align-items-center justify-content-center  my-3 h-100 rounded-3' key={index}>
                            <div className="col mx-auto my-2">
                                <p className='my-0 fs-6'>POSITION</p>
                                <h5 className="h5 my-0">{data.position}</h5>
                            </div>
                            <div className="col mx-auto my-2">
                                <p className='my-0 fs-6'>ADDRESS</p>
                                <h5 className="h5 my-0">{data.address}</h5>
                            </div>
                            <div className="col mx-auto my-2">
                                <p className='my-0 fs-6'>SALARY</p>
                                <h5 className="h5 my-0">{data.salary}</h5>
                            </div>
                            <div className="col mx-auto my-2">
                                <p className='m-0 fs-6'>APPLY DEADLINE</p>
                                <h5 className="h5 m-0">{data.applyDeadline}</h5>
                            </div>
                            <div className="col mx-auto my-2">
                                <Link href={""} className='btn btn-light fw-bold rounded-3'>Apply Now</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default Jobs;