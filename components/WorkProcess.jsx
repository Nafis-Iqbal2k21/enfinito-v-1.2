import React from 'react'
import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';

function WorkProcess() {
    const workCardData = [
        {
            title: "1. Discovery & Consultation",
            description: "We begin with a thorough consultation to understand your business goals, challenges, and current strategies."
        },
        {
            title: "2. Strategy Development",
            description: "Our team conducts comprehensive research and competitive analysis to inform the creation of a customized strategy."
        },
        {
            title: "3. Implementation",
            description: "We develop a detailed project plan outlining timelines, milestones, and deliverables."
        },
        {
            title: "4. Monitoring & Optimization",
            description: "We continuously monitor performance metrics and key indicators to assess the effectiveness of the strategy."
        },
        {
            title: "5. Reporting & Review",
            description: "Our team conducts comprehensive research and competitive analysis to inform the creation of a customized strategy."
        },
        {
            title: "6. Continual Improvement",
            description: "We develop a detailed project plan outlining timelines, milestones, and deliverables."
        },

    ];


    return (
        <div className='container'>
            <SectionTitle
                title={"Enfinito Innovative Working Process"}
                description={"Discover how our expert services can transform your business and drive growth"}
            />
            <div className="container">
                <div className="row">
                    {
                        workCardData.map((cardData, index) =>
                            <WorkCard
                                key={index}
                                title={cardData.title}
                                description={cardData.description}
                            />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default WorkProcess;