import MeetingChat from '@/components/MeetingChat';
import Reviews from '@/components/Reviews';
import SectionTitle from '@/components/SectionTitle';
import SingleBanner from '@/components/Services/SingleBanner';
import TabsContainer from '@/components/Services/TabsContainer';
import Slider from '@/components/Slider';
import { redirect } from 'next/navigation';
import React from 'react'

function page({ params }) {
  const servicesInfoData = [
    {
      title: "Graphic & Motion Design",
      slug: "graphic-motion-design",
      description: "Craft visually compelling and dynamic designs that captivate your audience, conveying your brand's message effectively through both static and animated visuals.",
      imageUrl: "/assets/images/graphic_motion.png",
      alt: "graphics & motion design",
    },
    {
      title: "Web Design & Development",
      slug: "web-design-development",
      description: "Transform your digital ideas into robust, functional solutions with our comprehensive website and software development services. We specialize in creating tailored web applications and software solutions that drive business growth and enhance user experiences. Our approach focuses on delivering high-quality, scalable, and secure products that meet your specific requirements.",
      imageUrl: "/assets/images/web.png",
      alt: "Web Design & Development",
      content: [{
        id: 1,
        title: "Custom Website Development",
        imageUrl: "/assets/images/web.png",
        description: "Design and build bespoke websites tailored to your business needs. We create visually appealing, responsive, and user-friendly websites that align with your brand and business goals.",
        keyServices: [
          {
            title: "Website Design",
            description: "Craft engaging and responsive web designs."
          },
          {
            title: "Front-End Development",
            description: "Implement interactive and dynamic user interfaces."
          },
          {
            title: "Back-End Development",
            description: "Develop robust server-side functionality."
          },
          {
            title: "Content Management Systems (CMS)",
            description: "Integrate user-friendly CMS platforms for easy content updates."
          }
        ]
      },
      {
        id: 2,
        title: "E-Commerce Development",
        imageUrl: "/assets/images/web.png",
        description: "Build powerful and scalable e-commerce platforms to drive online sales and enhance customer experiences. We develop secure and feature-rich online stores tailored to your business model.",
        keyServices: [
          {
            title: "Store Design",
            description: "Create visually appealing and user-friendly online stores."
          },
          {
            title: "Shopping Cart Integration",
            description: "Implement seamless shopping cart and checkout processes."
          },
          {
            title: "Payment Gateway Integration",
            description: "Integrate secure payment solutions."
          },
          {
            title: "Product Management",
            description: "Develop tools for efficient product and inventory management."
          }
        ]
      },
      {
        id: 3,
        title: "Software Development",
        imageUrl: "/assets/images/web.png",
        description: "Develop custom software solutions to streamline your business operations and solve specific challenges. We offer end-to-end software development services from ideation to deployment.",
        keyServices: [
          {
            title: "Custom Software Design",
            description: "Develop software tailored to your business requirements."
          },
          {
            title: "Application Development",
            description: "Build desktop and mobile applications."
          },
          {
            title: "Software Integration",
            description: "Integrate software with existing systems and tools."
          },
          {
            title: "Maintenance & Support",
            description: "Provide ongoing support and updates.."
          }
        ]
      },
      {
        id: 4,
        title: "Web Application Development",
        imageUrl: "/assets/images/web.png",
        description: "Create sophisticated web applications that offer advanced functionality and enhance user engagement. We focus on building scalable and efficient web apps that meet your specific needs.",
        keyServices: [
          {
            title: "Application Design",
            description: "Design user-friendly and intuitive web applications."
          },
          {
            title: "Front-End Development",
            description: "Implement interactive and responsive interfaces."
          },
          {
            title: "Back-End Development",
            description: "Develop server-side logic and databases."
          },
          {
            title: "API Integration",
            description: "Integrate with third-party services and APIs."
          }
        ]
      },
      {
        id: 5,
        title: "Mobile App Development",
        imageUrl: "/assets/images/web.png",
        description: "Develop mobile applications for iOS and Android platforms to expand your reach and engage users on their smartphones and tablets. We create apps that offer seamless performance and a great user experience.",
        keyServices: [
          {
            title: "Mobile App Design",
            description: "Design user-friendly and intuitive web applications."
          },
          {
            title: "Front-End Development",
            description: "Implement interactive and responsive interfaces."
          },
          {
            title: "Back-End Development",
            description: "Develop server-side logic and databases."
          },
          {
            title: "API Integration",
            description: "Integrate with third-party services and APIs."
          }
        ]
      },]
    },
    {
      slug: "ui-ux-design",
      description: "Elevate your digital products with our comprehensive UI/UX design services. We focus on creating user-centered designs that enhance functionality and aesthetics, ensuring a seamless and engaging experience for your audience. Our expertise spans from initial consulting to detailed design and testing.",
      imageUrl: "/assets/images/uiux.png",
      alt: "UI/UX Design"
    },
    {
      title: "Search Engine Optimization (SEO)",
      slug: "search-engine-optimization",
      description: "Optimize your online presence to rank higher in search engine results, increasing visibility and attracting more organic traffic.",
      imageUrl: "/assets/images/seo.png",
      alt: "Search Engine Optimization (SEO)"
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Implement strategic digital marketing campaigns that elevate your brand, engage your audience, and drive conversions.",
      imageUrl: "/assets/images/digital_marketing.png",
      alt: "Digital Marketing"
    },
    {
      title: "Product Photography",
      slug: "product-photography",
      description: "Showcase your products with high-quality photography that highlights their best features and enhances their appeal.",
      imageUrl: "/assets/images/photography.png",
      alt: "Product Photography"
    },
    {
      title: "Advertising & TVC/OVC",
      slug: "advertising-tvc-ovc",
      description: "Produce impactful advertisements and TVC/OVC that capture attention, convey your message, and influence your target audience",
      imageUrl: "/assets/images/video_graphy.png",
      alt: "Advertising & TVC/OVC"
    },
    {
      title: "Company Automation Solution",
      slug: "company-automation-solution",
      description: "Provide cutting-edge automation solutions to streamline business operations, enhance efficiency, and drive growth through technology.",
      imageUrl: "/assets/images/automation.png",
      alt: "Company Automation Solution"
    },

  ]

  const selectedService = servicesInfoData.find((service) => service.slug === params.slug);

  if (servicesInfoData.find((service) => service.slug === params.slug)) {
    return (
      <>
        <SingleBanner
          title={selectedService.title}
          description={selectedService.description}
          imgUrl={selectedService.imageUrl}
          alt={selectedService.imageUrl}
        />
        <Slider />
        <div className="container">
          <SectionTitle
            title={"Here's what we bring to the table"}
            description={selectedService.description}
          />
        </div>
        {
          selectedService.content && <TabsContainer serviceData={selectedService.content} />
        }
        <Reviews />
        <MeetingChat />
      </>
    )

  } else {
    return redirect('/')
  }
}

export default page;