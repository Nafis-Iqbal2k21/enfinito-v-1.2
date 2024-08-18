import React from 'react'
import SectionTitle from '../SectionTitle';
import CaseStudyCard from '../CaseStudyCard';
import Link from 'next/link';

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
            otherClassName: "col-md-7"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            link: "",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the  ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-5"
        }

    ]
    return (
        <div className='container my-5'>
            <SectionTitle
                title={"Explore Our Impactful Case Studies"}
                description={"Discover how Enfinito has transformed challenges into triumphs, delivering innovative solutions and exceptional results for our clients."}
            />

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
            <div className='d-flex justify-content-center'>
                <Link href={'/portfolio'} className='btn btn-light'>View More</Link>
            </div>
        </div>
    )
}

export default CaseStudy;