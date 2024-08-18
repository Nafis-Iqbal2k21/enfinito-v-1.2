import React from 'react'
import CaseStudyCard from '../CaseStudyCard';

function CaseStudy() {
    const caseStudyData = [
        {
            title: "National Talent Hunt Odyssey 2024",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            link: "",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            link: "",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            link: "",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-4"
        }

    ]
    return (
        <div className='container my-5'>
            <div className="row">
                {
                    caseStudyData.map((data, index) =>
                        <CaseStudyCard
                            key={index}
                            otherClassName={data.otherClassName}
                            url={data.image}
                            alt={data.alt}
                            title={data.title}
                            description={data.description}
                            link={data.slug}
                        />)
                }
            </div>
        </div>
    )
}

export default CaseStudy;