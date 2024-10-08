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
            otherClassName: "col-md-7"
        },
        {
            title: "National Talent Hunt Odyssey 2024",
            link: "",
            slug: "ntho24",
            description: "Sena Public School & College, located in Savar Cantonment, Dhaka, stands out as one of the nation’s premier educational institutions ...",
            image: "/assets/images/web.png",
            alt: "ntho24",
            otherClassName: "col-md-5"
        },
        {
            title: "Momo Mama Full Branding Solutions",
            slug: "momo-mama",
            description: "Momo Mama is a popular food court restaurant renowned for its delicious momo. Known for its flavorful and expertly crafted momo dishes ...",
            image: "/assets/images/web.png",
            alt: "momo-mama",
            otherClassName: "col-md-4"
        },
        {
            title: "Gentle Park Clothing Brand Promotion",
            slug: "gentle-park",
            description: "Gentle Park is a distinguished clothing brand based in Bangladesh, Gentle Park is dedicated to providing fashion-forward apparel ...",
            image: "/assets/images/web.png",
            alt: "gentle-park",
            otherClassName: "col-md-4"
        },
        {
            title: "Fabreflex's Marketing and Design Solutions",
            slug: "fabre-flex",
            description: "Fabreflex, a rising clothing brand, is known for its stylish and high-quality apparel that resonates with modern fashion enthusiasts ...",
            image: "/assets/images/web.png",
            alt: "fabre-flex",
            otherClassName: "col-md-4"
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
            <div className='d-flex justify-content-center mt-4'>
                <Link href={'/portfolio'} className='btn btn-light'>View More</Link>
            </div>
        </div>
    )
}

export default CaseStudy;