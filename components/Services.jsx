import React from 'react'
import ServicesCard from './ServicesCard';
import SectionTitle from './SectionTitle';

function Services() {
  const servicesData = [
    {
      title: "Graphic, Motion & CGI Design",
      slug: "graphic-motion-design" , 
      description: "Craft visually compelling and dynamic designs that captivate your audience, conveying your brand's message effectively through both static and animated visuals.",
      imageUrl: "/assets/images/graphic_motion.png",
      alt: "graphic, motion & cgi Design"
    },
    {
      title: "Web & APP Development",
      slug: "web-design-development" , 
      description: "Create stunning, user-friendly websites that enhance user experience and drive engagement with seamless functionality.",
      imageUrl: "/assets/images/web.png",
      alt: "Web & APP Development"
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design" , 
      description: "Design intuitive and aesthetically pleasing interfaces that provide a superior user experience and boost user satisfaction.",
      imageUrl: "/assets/images/uiux.png",
      alt: "UI/UX Design"
    },
    {
      title: "Search Engine Optimization",
      slug: "search-engine-optimization" , 
      description: "Optimize your online presence to rank higher in search engine results, increasing visibility and attracting more organic traffic.",
      imageUrl: "/assets/images/seo.png",
      alt: "Search Engine Optimization"
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing" , 
      description: "Implement strategic digital marketing campaigns that elevate your brand, engage your audience, and drive conversions.",
      imageUrl: "/assets/images/digital_marketing.png",
      alt: "Digital Marketing"
    },
    {
      title: "Product Photography",
      slug: "product-photography" , 
      description: "Showcase your products with high-quality photography that highlights their best features and enhances their appeal.",
      imageUrl: "/assets/images/photography.png",
      alt: "Product Photography"
    },
    {
      title: "Advertising & TVC/OVC",
      slug: "advertising-tvc-ovc" , 
      description: "Produce impactful advertisements and TVC/OVC that capture attention, convey your message, and influence your target audience",
      imageUrl: "/assets/images/video_graphy.png",
      alt: "Advertising & TVC/OVC"
    },
    {
      title: "Company Automation Solution",
      slug: "company-automation-solution" ,
      description: "Provide cutting-edge automation solutions to streamline business operations, enhance efficiency, and drive growth through technology.",
      imageUrl: "/assets/images/automation.png",
      alt: "Company Automation Solution"
    },

  ]
  return (
    <div className='container'>
      <SectionTitle
        title={'Elevate Your Business with Our Expert Services'}
        description={'Discover how our expert services can transform your business and drive growth.'}
      />

      <div className="row row-cols-1 row-cols-md-4">
        {
          servicesData.map(( data, index ) =>
            <ServicesCard
              key={index}
              title={data.title}
              description={data.description}
              src={data.imageUrl}
              alt={data.alt}
              slug={data.slug}
            />
          )
        }
      </div>
    </div>
  )
}

export default Services;