import MeetingChat from '@/components/MeetingChat';
import Reviews from '@/components/Reviews';
import SectionTitle from '@/components/SectionTitle';
import SingleBanner from '@/components/Services/SingleBanner';
import TabsContainer from '@/components/Services/TabsContainer';
import Slider from '@/components/Slider';
import { redirect } from 'next/navigation';
import React from 'react'


export function generateStaticParams() {
  return [
    { slug: 'graphic-motion-cgi-design' },
    { slug: 'web-design-development' },
    { slug: 'ui-ux-design' },
    { slug: 'search-engine-optimization' },
    { slug: 'digital-marketing' },
    { slug: 'product-photography' },
    { slug: 'advertising-tvc-ovc' },
    { slug: 'company-automation-solution' }
  ]
}

function page({ params }) {
  const servicesInfoData = [
    {
      title: "Graphic, Motion & CGI Design",
      slug: "graphic-motion-cgi-design",
      description: "Craft visually compelling and dynamic designs that captivate your audience, conveying your brand's message effectively through both static and animated visuals.",
      imageUrl: "/assets/images/graphic_motion.png",
      alt: "graphics & motion design",
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
            description: "Provide ongoing support and updates."
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
      },
      {
        id: 6,
        title: "System Integration",
        imageUrl: "/assets/images/web.png",
        description: "Ensure seamless operation across various software systems and platforms. We specialize in integrating disparate systems to enhance functionality and data flow within your organization.",
        keyServices: [
          {
            title: "Integration Strategy",
            description: "Develop a plan for integrating systems."
          },
          {
            title: "API Development",
            description: "Create and manage APIs for system connectivity."
          },
          {
            title: "Data Synchronization",
            description: "Ensure consistent data flow between systems."
          },
          {
            title: "Integration Testing",
            description: "Validate the functionality and performance of integrated systems."
          }
        ]
      },
      {
        id: 7,
        title: "Database Development",
        imageUrl: "/assets/images/web.png",
        description: "Design and manage robust databases to store and organize your data effectively. We offer solutions to ensure data integrity, security, and efficient access.",
        keyServices: [
          {
            title: "Database Design",
            description: "Create schema and structure for your data."
          },
          {
            title: "Database Development",
            description: "Implement databases using appropriate technologies."
          },
          {
            title: "Performance Optimization",
            description: "Enhance database performance and speed."
          },
          {
            title: "Backup & Recovery",
            description: "Implement strategies for data protection and recovery."
          }
        ]
      },
      {
        id: 8,
        title: "Maintenance & Support",
        imageUrl: "/assets/images/web.png",
        description: "Provide ongoing support and maintenance to ensure the continued performance and security of your website or software. We offer services to address issues, apply updates, and enhance functionality.",
        keyServices: [
          {
            title: "Bug Fixes",
            description: "Resolve issues and bugs as they arise."
          },
          {
            title: "Performance Monitoring",
            description: "Track and improve system performance."
          },
          {
            title: "Updates & Upgrades",
            description: "Apply software updates and new features."
          },
          {
            title: "Technical Support",
            description: "Offer assistance and troubleshooting."
          }
        ]
      },]
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
            description: "Provide ongoing support and updates."
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
      },
      {
        id: 6,
        title: "System Integration",
        imageUrl: "/assets/images/web.png",
        description: "Ensure seamless operation across various software systems and platforms. We specialize in integrating disparate systems to enhance functionality and data flow within your organization.",
        keyServices: [
          {
            title: "Integration Strategy",
            description: "Develop a plan for integrating systems."
          },
          {
            title: "API Development",
            description: "Create and manage APIs for system connectivity."
          },
          {
            title: "Data Synchronization",
            description: "Ensure consistent data flow between systems."
          },
          {
            title: "Integration Testing",
            description: "Validate the functionality and performance of integrated systems."
          }
        ]
      },
      {
        id: 7,
        title: "Database Development",
        imageUrl: "/assets/images/web.png",
        description: "Design and manage robust databases to store and organize your data effectively. We offer solutions to ensure data integrity, security, and efficient access.",
        keyServices: [
          {
            title: "Database Design",
            description: "Create schema and structure for your data."
          },
          {
            title: "Database Development",
            description: "Implement databases using appropriate technologies."
          },
          {
            title: "Performance Optimization",
            description: "Enhance database performance and speed."
          },
          {
            title: "Backup & Recovery",
            description: "Implement strategies for data protection and recovery."
          }
        ]
      },
      {
        id: 8,
        title: "Maintenance & Support",
        imageUrl: "/assets/images/web.png",
        description: "Provide ongoing support and maintenance to ensure the continued performance and security of your website or software. We offer services to address issues, apply updates, and enhance functionality.",
        keyServices: [
          {
            title: "Bug Fixes",
            description: "Resolve issues and bugs as they arise."
          },
          {
            title: "Performance Monitoring",
            description: "Track and improve system performance."
          },
          {
            title: "Updates & Upgrades",
            description: "Apply software updates and new features."
          },
          {
            title: "Technical Support",
            description: "Offer assistance and troubleshooting."
          }
        ]
      },]
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Elevate your digital products with our comprehensive UI/UX design services. We focus on creating user-centered designs that enhance functionality and aesthetics, ensuring a seamless and engaging experience for your audience. Our expertise spans from initial consulting to detailed design and testing.",
      imageUrl: "/assets/images/uiux.png",
      alt: "UI/UX Design",
      content: [{
        id: 1,
        title: "UI/UX Consulting and Design",
        imageUrl: "/assets/images/web.png",
        description: "Provide expert guidance and design solutions tailored to your project needs. We offer strategic insights and hands-on design services to optimize user interfaces and experiences.",
        keyServices: [
          {
            title: "Consulting",
            description: "Strategic advice on design and user experience."
          },
          {
            title: "UI/UX Design",
            description: "Custom design solutions for web and mobile applications."
          },
          {
            title: "Design Workshops",
            description: "Collaborative sessions to refine design goals."
          }
        ]
      },
      {
        id: 2,
        title: "Mobile-Based Design",
        imageUrl: "/assets/images/web.png",
        description: "Create intuitive and responsive designs specifically for mobile devices. We ensure your applications are optimized for various screen sizes and provide a smooth user experience on smartphones and tablets.",
        keyServices: [
          {
            title: "Responsive Design",
            description: "Adapt designs for different mobile devices."
          },
          {
            title: "Touch Interface Design",
            description: "Optimize touch interactions for mobile users."
          },
          {
            title: "Performance Optimization",
            description: "Enhance load times and usability on mobile platforms."
          }
        ]
      },
      {
        id: 3,
        title: "Wireframe & Prototype",
        imageUrl: "/assets/images/web.png",
        description: "Develop wireframes and prototypes to visualize and test design concepts before full development. This process helps validate ideas and refine user flows.",
        keyServices: [
          {
            title: "Wireframing",
            description: "Create structural blueprints for your design."
          },
          {
            title: "Interactive Prototypes",
            description: "Build interactive models to test user interactions."
          },
          {
            title: "Iterative Testing",
            description: "Refine designs based on user feedback and testing."
          }
        ]
      },
      {
        id: 4,
        title: "Data Visualization",
        imageUrl: "/assets/images/web.png",
        description: "Transform complex data into clear, engaging visual representations. We design charts, graphs, and dashboards that make data insights easily understandable and actionable.",
        keyServices: [
          {
            title: "Dashboard Design",
            description: "Create user-friendly dashboards for data insights."
          },
          {
            title: "Custom Charts & Graphs",
            description: "Design visualizations tailored to your data."
          },
          {
            title: "Interactive Data Elements",
            description: "Develop interactive features to explore data."
          }
        ]
      },
      {
        id: 5,
        title: "User Research and Usability Testing",
        imageUrl: "/assets/images/web.png",
        description: "Conduct research and usability testing to understand user needs and ensure your designs meet their expectations. We use various methods to gather insights and improve design effectiveness.",
        keyServices: [
          {
            title: "User Interviews",
            description: "Gather in-depth feedback from users."
          },
          {
            title: "Surveys & Questionnaires",
            description: "Collect quantitative and qualitative data."
          },
          {
            title: "Usability Testing",
            description: "Test designs with real users to identify areas for improvement."
          }
        ]
      },
      {
        id: 6,
        title: "UX Audit",
        imageUrl: "/assets/images/web.png",
        description: "Evaluate existing digital products to identify usability issues and areas for enhancement. Our UX audit provides actionable recommendations to improve user experience and design effectiveness.",
        keyServices: [
          {
            title: "Heuristic Evaluation",
            description: "Assess usability based on established principles."
          },
          {
            title: "Competitor Analysis",
            description: "Compare with competitors to identify strengths and weaknesses."
          },
          {
            title: "Actionable Recommendations",
            description: "Provide specific recommendations for UX improvements."
          }
        ]
      }]
    },
    {
      title: "Search Engine Optimization (SEO)",
      slug: "search-engine-optimization",
      description: "Enhance your website’s visibility and drive organic traffic with our expert SEO services. Our approach focuses on optimizing your site to achieve higher search engine rankings, attract more visitors, and improve your online presence.",
      imageUrl: "/assets/images/seo.png",
      alt: "Search Engine Optimization (SEO)",
      content: [{
        id: 1,
        title: "Keyword Research",
        imageUrl: "/assets/images/web.png",
        description: "Identify high-performing keywords to target in your SEO strategy. This helps drive qualified traffic and improves search visibility.",
        keyServices: [
          {
            title: "Competitive Analysis",
            description: "Identify high-performing keywords to target in your SEO strategy. This helps drive qualified traffic and improves search visibility."
          },
          {
            title: "Keyword Selection",
            description: "Choose relevant keywords with high search volume."
          },
          {
            title: "Long-Tail Keywords",
            description: "Target specific, less competitive phrases."
          }
        ]
      },
      {
        id: 2,
        title: "On-Page Optimization",
        imageUrl: "/assets/images/web.png",
        description: "Optimize individual web pages to enhance search rankings and user experience. Includes refining content, meta tags, and site structure.",
        keyServices: [
          {
            title: "Meta Tags",
            description: "Optimize titles and descriptions."
          },
          {
            title: "Content Optimization",
            description: "Ensure content is keyword-rich and engaging."
          },
          {
            title: "Internal Linking",
            description: "Improve site navigation."
          }
        ]
      },
      {
        id: 3,
        title: "Technical SEO",
        imageUrl: "/assets/images/web.png",
        description: "Ensure your website’s technical elements are optimized for search engines. Focuses on site speed, mobile-friendliness, and overall site performance.",
        keyServices: [
          {
            title: "Site Speed Optimization",
            description: "Improve loading times."
          },
          {
            title: "Mobile Optimization",
            description: "Ensure responsive design."
          },
          {
            title: "XML Sitemaps",
            description: "Create and submit sitemaps."
          }
        ]
      },
      {
        id: 4,
        title: "Link Building",
        imageUrl: "/assets/images/web.png",
        description: "Build your website’s authority through high-quality backlinks. This helps improve your site’s credibility and search engine rankings.",
        keyServices: [
          {
            title: "High-Quality Backlinks",
            description: "Acquire links from reputable sites."
          },
          {
            title: "Guest Posting",
            description: "Publish content on other sites."
          },
          {
            title: "Social Media Signals",
            description: " Enhance visibility through social platforms."
          }
        ]
      }]
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Implement strategic digital marketing campaigns that elevate your brand, engage your audience, and drive conversions.",
      imageUrl: "/assets/images/digital_marketing.png",
      alt: "Digital Marketing",
      content: [{
        id: 1,
        title: "Social Media Marketing",
        imageUrl: "/assets/images/web.png",
        description: "Build and engage your audience through strategic social media campaigns. We create and manage content across various platforms to enhance brand presence, drive engagement, and generate leads.",
        keyServices: [
          {
            title: "Strategy Development",
            description: "Create a tailored social media plan."
          },
          {
            title: "Content Creation",
            description: "Design and produce engaging posts and ads."
          },
          {
            title: "Account Management",
            description: "Manage social media accounts and interactions."
          },
          {
            title: "Analytics & Reporting",
            description: "Track performance and optimize strategies."
          }
        ]
      },
      {
        id: 2,
        title: "Google Ads",
        imageUrl: "/assets/images/web.png",
        description: "Boost your online presence with targeted Google Ads campaigns. We create and manage ads on Google’s search and display networks to attract potential customers and increase conversions.",
        keyServices: [
          {
            title: "Campaign Strategy",
            description: "Develop a strategic plan for Google Ads."
          },
          {
            title: "Ad Creation",
            description: "Design and write effective search and display ads."
          },
          {
            title: "Keyword Targeting",
            description: "Identify and target relevant keywords."
          },
          {
            title: "Performance Tracking",
            description: "Monitor and optimize ad performance."
          }
        ]
      },
      {
        id: 3,
        title: "Pay-Per-Click Advertising",
        imageUrl: "/assets/images/web.png",
        description: "Drive targeted traffic to your website with effective PPC campaigns. We manage ad creation, placement, and optimization to ensure maximum ROI and increased visibility.",
        keyServices: [
          {
            title: "Campaign Setup",
            description: "Develop and launch PPC campaigns."
          },
          {
            title: "Ad Creation",
            description: "Design compelling ads and landing pages."
          },
          {
            title: "Bid Management",
            description: "Optimize bidding strategies for cost-effectiveness."
          },
          {
            title: "Performance Analysis",
            description: "Track results and adjust campaigns."
          }
        ]
      },
      {
        id: 4,
        title: "Email Marketing",
        imageUrl: "/assets/images/web.png",
        description: "Connect with your audience through personalized email campaigns that drive engagement and conversions. We handle everything from campaign design to performance analysis.",
        keyServices: [
          {
            title: "Campaign Design",
            description: "Create visually appealing and effective emails."
          },
          {
            title: "List Management",
            description: "Segment and manage email lists."
          },
          {
            title: "Automation",
            description: "Set up automated email sequences."
          },
          {
            title: "Analytics",
            description: "Measure open rates, click-through rates, and conversions."
          }
        ]
      },
      {
        id: 5,
        title: "Content Marketing",
        imageUrl: "/assets/images/web.png",
        description: "Attract and engage your target audience with valuable content that supports your brand and drives conversions. Our content marketing services include strategy development, content creation, and performance tracking.",
        keyServices: [
          {
            title: "Content Strategy",
            description: "Develop a comprehensive content plan."
          },
          {
            title: "Content Creation",
            description: "Produce blogs, articles, infographics, and more."
          },
          {
            title: "Distribution",
            description: "Share content across relevant channels."
          },
          {
            title: "Performance Tracking",
            description: "Measure content effectiveness and engagement."
          }
        ]
      },
      {
        id: 6,
        title: "Influencer Marketing",
        imageUrl: "/assets/images/web.png",
        description: "Leverage the reach and influence of key industry figures to promote your brand. We identify and collaborate with influencers to amplify your message and drive authentic engagement.",
        keyServices: [
          {
            title: "Influencer Identification",
            description: "Find relevant influencers for your brand."
          },
          {
            title: "Campaign Coordination",
            description: "Manage influencer partnerships and campaigns."
          },
          {
            title: "Content Creation",
            description: "Ensure consistent data flow between systems."
          },
          {
            title: "Performance Monitoring",
            description: "Track influencer impact and ROI."
          }
        ]
      },
      {
        id: 7,
        title: "Online Reputation Management",
        imageUrl: "/assets/images/web.png",
        description: "Protect and enhance your brand’s online reputation. We monitor and manage reviews, social mentions, and public perception to ensure a positive brand image.",
        keyServices: [
          {
            title: "Reputation Monitoring",
            description: "Track online mentions and reviews."
          },
          {
            title: "Response Management",
            description: "Address and respond to feedback."
          },
          {
            title: "Brand Building",
            description: "Implement strategies to build a positive image."
          },
          {
            title: "Crisis Management",
            description: "Manage and mitigate negative publicity."
          }
        ]
      }]
    },
    {
      title: "Product Photography",
      slug: "product-photography",
      description: "Showcase your products with high-quality photography that highlights their best features and enhances their appeal.",
      imageUrl: "/assets/images/photography.png",
      alt: "Product Photography",
      content: [{
        id: 1,
        title: "E-commerce Product Photography",
        imageUrl: "/assets/images/web.png",
        description: " Boost your online sales with high-quality product images that showcase your items in detail. Our e-commerce photography ensures your products are well-represented, helping to improve customer trust and increase conversions.",
        keyServices: [
          {
            title: "Product Preparation",
            description: "Clean and prepare products for shooting."
          },
          {
            title: "Studio Lighting",
            description: "Use professional lighting setups to highlight product features."
          },
          {
            title: "Photography",
            description: "Capture detailed images from multiple angles."
          },
          {
            title: "Post-Production",
            description: "Edit and retouch images to ensure accuracy and visual appeal."
          }
        ]
      },
      {
        id: 2,
        title: "Fashion Photography",
        imageUrl: "/assets/images/web.png",
        description: "Capture the latest fashion trends with high-quality images that showcase clothing, accessories, and footwear in their best light. Our fashion photography services highlight the details, textures, and overall style, ensuring your fashion products stand out.",
        keyServices: [
          {
            title: "Concept Development",
            description: "Design the visual style and theme for the shoot."
          },
          {
            title: "Model Casting & Styling",
            description: "Select and style models to highlight fashion pieces."
          },
          {
            title: "Photography",
            description: "Capture high-resolution images focusing on detail and texture."
          },
          {
            title: "Post-Production",
            description: "Edit and retouch images to enhance appearance and alignment with brand aesthetics."
          }
        ]
      },
      {
        id: 3,
        title: "Food & Restaurant Photography",
        imageUrl: "/assets/images/web.png",
        description: "Tempt your customers with visually appealing food photography that emphasizes freshness and flavor. We create vibrant, mouth-watering images that enhance your restaurant’s menu and attract diners.",
        keyServices: [
          {
            title: "Concept Planning",
            description: "Develop creative concepts to showcase food dishes."
          },
          {
            title: "Food Styling",
            description: "Arrange and style food for an appetizing presentation."
          },
          {
            title: "Photographyt",
            description: "Capture vibrant, high-quality images of dishes and drinks."
          },
          {
            title: "Post-Production",
            description: "Enhance colors, textures, and presentation through editing."
          }
        ]
      },
      {
        id: 4,
        title: "Jewelry Photography",
        imageUrl: "/assets/images/web.png",
        description: " Highlight the elegance and intricacy of your jewelry with detailed and striking images. Our jewelry photography services capture the sparkle and craftsmanship of each piece, making them irresistible to potential buyers.",
        keyServices: [
          {
            title: "Jewelry Styling",
            description: "Arrange pieces to highlight their features and craftsmanship."
          },
          {
            title: "Macro Photography",
            description: "Use close-up techniques to capture intricate details."
          },
          {
            title: "Lighting & Reflections",
            description: "Use specialized lighting to enhance sparkle and shine."
          },
          {
            title: "Post-Production",
            description: "Retouch images to highlight clarity and brilliance."
          }
        ]
      },
      {
        id: 5,
        title: "Corporate Product Photography",
        imageUrl: "/assets/images/web.png",
        description: "Present your corporate products with professionalism and precision. Our corporate product photography services focus on creating clean, polished images that align with your brand’s image and enhance your marketing materials.",
        keyServices: [
          {
            title: "Product Styling",
            description: "Arrange products to reflect a professional image"
          },
          {
            title: "High-Resolution Photography",
            description: "Capture detailed and clear images of corporate products."
          },
          {
            title: "Brand Alignment",
            description: "Ensure images align with corporate branding and marketing materials."
          },
          {
            title: "Post-Production",
            description: "Edit photos to maintain a polished and professional look."
          }
        ]
      },
      {
        id: 6,
        title: "Lifestyle Product Photography",
        imageUrl: "/assets/images/web.png",
        description: "Create engaging images that show your products in real-life settings. Our lifestyle photography services highlight how your products are used and enjoyed, helping potential customers envision them in their own lives.",
        keyServices: [
          {
            title: "Lifestyle Concepting",
            description: "Develop scenarios that showcase products in real-life settings."
          },
          {
            title: "Scene Setting",
            description: "Create and style environments that highlight product usage."
          },
          {
            title: "Photography",
            description: "Capture natural and engaging images of products in use."
          },
          {
            title: "Post-Production",
            description: "Edit images to enhance realism and appeal."
          }
        ]
      },
      {
        id: 7,
        title: "Product Packaging Photography",
        imageUrl: "/assets/images/web.png",
        description: "Showcase your product packaging with clear and attractive images that emphasize design and branding. Our packaging photography highlights the unique aspects of your product’s packaging, enhancing its appeal on store shelves",
        keyServices: [
          {
            title: "Packaging Styling",
            description: "Arrange and present packaging to emphasize design and branding."
          },
          {
            title: "Photography",
            description: "Capture clear and attractive images of packaging."
          },
          {
            title: "Brand Consistency",
            description: "Ensure images align with brand identity and marketing objectives."
          },
          {
            title: "Post-Production",
            description: "Edit images to enhance visual appeal and accuracy."
          }
        ]
      },
      {
        id: 8,
        title: "Corporate Event Photography",
        imageUrl: "/assets/images/web.png",
        description: "Document corporate events with professional photography that captures the essence of your gatherings. From conferences and seminars to product launches and team-building activities, we provide high-quality images that reflect the significance of your event.",
        keyServices: [
          {
            title: "Event Planning",
            description: "Coordinate with organizers to cover key moments and activities."
          },
          {
            title: "Candid & Posed Shots",
            description: "Capture both spontaneous and formal images of attendees."
          },
          {
            title: "High-Resolution Photography",
            description: "Provide clear, high-quality images of the event."
          },
          {
            title: "Post-Production",
            description: "Edit photos to reflect the event’s atmosphere and significance."
          }
        ]
      }]
    },
    {
      title: "Advertising & TVC/OVC",
      slug: "advertising-tvc-ovc",
      description: "Produce impactful advertisements and TVC/OVC that capture attention, convey your message, and influence your target audience",
      imageUrl: "/assets/images/video_graphy.png",
      alt: "Advertising & TVC/OVC",
      content: [{
        id: 1,
        title: "Advertising Video Production",
        imageUrl: "/assets/images/web.png",
        description: "Create impactful video content that captures your brand’s essence and drives engagement. We manage the entire process from concept to final cut, ensuring high-quality videos that enhance visibility and inspire action.",
        keyServices: [
          {
            title: "Concept Development",
            description: "Craft creative ideas and storylines.."
          },
          {
            title: "Scriptwriting",
            description: "Develop engaging scripts."
          },
          {
            title: "Filming",
            description: "Capture high-quality footage."
          },
          {
            title: "Post-Production",
            description: "Edit and refine the final video."
          }
        ]
      },
      {
        id: 2,
        title: "Television Commercials (TVC",
        imageUrl: "/assets/images/web.png",
        description: "Produce memorable TV commercials designed to captivate and persuade. Our comprehensive services include creative direction, production, and editing to deliver commercials that leave a lasting impression.",
        keyServices: [
          {
            title: "Creative Direction",
            description: "Develop compelling concepts."
          },
          {
            title: "Production Planning",
            description: "Handle logistics and casting."
          },
          {
            title: "Filming & Editing",
            description: "Produce and refine footage."
          },
          {
            title: "Broadcast Optimization",
            description: "Tailor for TV standards."
          }
        ]
      },
      {
        id: 3,
        title: "Online Video Campaigns (OVC)",
        imageUrl: "/assets/images/web.png",
        description: " Boost your digital presence with engaging online videos. We create dynamic content tailored for platforms like YouTube and social media, focusing on captivating visuals and strategic distribution to drive traffic and brand awareness.",
        keyServices: [
          {
            title: "Campaign Strategy",
            description: "Develop targeted strategies."
          },
          {
            title: "Content Creation",
            description: "Produce platform-specific videos.."
          },
          {
            title: "Optimization & Distribution",
            description: "Manage video distribution and SEO."
          },
          {
            title: "Performance Analysis",
            description: "Track and analyze effectiveness."
          }
        ]
      },
      {
        id: 4,
        title: "Corporate Video Production ",
        imageUrl: "/assets/images/web.png",
        description: "Develop professional videos that communicate your company’s message and enhance your corporate image. Our corporate video production services cover everything from concept development to filming and editing, delivering high-quality content for internal and external use.",
        keyServices: [
          {
            title: "Concept Development",
            description: "Plan and create the video’s theme and objectives."
          },
          {
            title: "Scriptwriting",
            description: "Craft scripts that effectively communicate your message."
          },
          {
            title: "Filming",
            description: "Capture high-resolution footage in a corporate setting."
          },
          {
            title: "Post-Production",
            description: "Edit and polish the video for a professional finish."
          }
        ]
      }]
    },
    {
      title: "Company Automation Solution",
      slug: "company-automation-solution",
      description: "Provide cutting-edge automation solutions to streamline business operations, enhance efficiency, and drive growth through technology.",
      imageUrl: "/assets/images/automation.png",
      alt: "Company Automation Solution",
      content: [{
        id: 1,
        title: "Customer Relationship Management (CRM) Systems",
        btnText: "CRM Systems",
        imageUrl: "/assets/images/web.png",
        description: "Elevate your customer engagement with CRM systems that centralize and automate every aspect of your interactions. These systems seamlessly integrate customer data, streamline sales processes, and enable targeted marketing efforts. By offering comprehensive insights into customer behavior and preferences, CRM systems foster stronger relationships, boost sales performance, and drive personalized customer experiences.",
        // keyServices: [
        //   {
        //     title: "Website Design",
        //     description: "Craft engaging and responsive web designs."
        //   },
        //   {
        //     title: "Front-End Development",
        //     description: "Implement interactive and dynamic user interfaces."
        //   },
        //   {
        //     title: "Back-End Development",
        //     description: "Develop robust server-side functionality."
        //   },
        //   {
        //     title: "Content Management Systems (CMS)",
        //     description: "Integrate user-friendly CMS platforms for easy content updates."
        //   }
        // ]
      },
      {
        id: 2,
        title: "Enterprise Resource Planning (ERP) Systems",
        btnText: "ERP Systems",
        imageUrl: "/assets/images/web.png",
        description: "Transform your business operations with ERP systems that unify core processes into a single, cohesive platform. From financial management to supply chain coordination, ERP systems streamline workflows and enhance data accuracy. By providing real-time visibility across all departments, these systems support strategic decision-making and drive operational excellence.",
        // keyServices: [
        //   {
        //     title: "Store Design",
        //     description: "Create visually appealing and user-friendly online stores."
        //   },
        //   {
        //     title: "Shopping Cart Integration",
        //     description: "Implement seamless shopping cart and checkout processes."
        //   },
        //   {
        //     title: "Payment Gateway Integration",
        //     description: "Integrate secure payment solutions."
        //   },
        //   {
        //     title: "Product Management",
        //     description: "Develop tools for efficient product and inventory management."
        //   }
        // ]
      },
      {
        id: 3,
        title: "Human Resources (HR) Management Systems",
        btnText: "HR Management Systems",
        imageUrl: "/assets/images/web.png",
        description: "Revolutionize your HR operations with management systems designed to automate and optimize your human resources functions. Streamline recruitment, onboarding, payroll, and performance management with precision. These systems enhance administrative efficiency, ensure compliance, and empower your HR team to focus on strategic initiatives and employee satisfaction.",
        // keyServices: [
        //   {
        //     title: "Custom Software Design",
        //     description: "Develop software tailored to your business requirements."
        //   },
        //   {
        //     title: "Application Development",
        //     description: "Build desktop and mobile applications."
        //   },
        //   {
        //     title: "Software Integration",
        //     description: "Integrate software with existing systems and tools."
        //   },
        //   {
        //     title: "Maintenance & Support",
        //     description: "Provide ongoing support and updates.."
        //   }
        // ]
      },
      {
        id: 4,
        title: "Point of Sale (POS) Systems",
        btnText: "POS Systems",
        imageUrl: "/assets/images/web.png",
        description: " Redefine the retail and hospitality experience with cutting-edge POS systems that automate transactions and inventory management. Deliver seamless customer interactions, capture real-time sales data, and gain insights into inventory trends. POS systems streamline checkout processes and provide actionable analytics to drive business growth and operational efficiency.",
        // keyServices: [
        //   {
        //     title: "Application Design",
        //     description: "Design user-friendly and intuitive web applications."
        //   },
        //   {
        //     title: "Front-End Development",
        //     description: "Implement interactive and responsive interfaces."
        //   },
        //   {
        //     title: "Back-End Development",
        //     description: "Develop server-side logic and databases."
        //   },
        //   {
        //     title: "API Integration",
        //     description: "Integrate with third-party services and APIs."
        //   }
        // ]
      },
      {
        id: 5,
        title: "Finance and Accounting Systems",
        btnText: "Finance Automation",
        imageUrl: "/assets/images/web.png",
        description: "Elevate your financial management with advanced finance and accounting systems that automate and refine your financial processes. From invoicing and expense tracking to comprehensive reporting, these systems ensure accuracy, enhance compliance, and deliver insightful financial analytics. Empower your finance team to manage budgets, forecast trends, and make informed decisions with ease.",
        // keyServices: [
        //   {
        //     title: "Mobile App Design",
        //     description: "Design user-friendly and intuitive web applications."
        //   },
        //   {
        //     title: "Front-End Development",
        //     description: "Implement interactive and responsive interfaces."
        //   },
        //   {
        //     title: "Back-End Development",
        //     description: "Develop server-side logic and databases."
        //   },
        //   {
        //     title: "API Integration",
        //     description: "Integrate with third-party services and APIs."
        //   }
        // ]
      },
      {
        id: 6,
        title: "Supply Chain Management (SCM) Systems",
        btnText: "SCM Systems",
        imageUrl: "/assets/images/web.png",
        description: "Optimize your supply chain with sophisticated SCM systems that automate and enhance every link in the chain. From procurement and inventory management to order fulfillment and logistics, these systems improve efficiency, reduce costs, and ensure timely delivery. Gain a competitive edge with streamlined operations and enhanced supply chain visibility.",
        // keyServices: [
        //   {
        //     title: "Integration Strategy",
        //     description: "Develop a plan for integrating systems."
        //   },
        //   {
        //     title: "API Development",
        //     description: "Create and manage APIs for system connectivity."
        //   },
        //   {
        //     title: "Data Synchronization",
        //     description: "Ensure consistent data flow between systems."
        //   },
        //   {
        //     title: "Integration Testing",
        //     description: "Validate the functionality and performance of integrated systems."
        //   }
        // ]
      },
      {
        id: 7,
        title: "Marketing Automation Platforms",
        btnText: "Marketing Automation",
        imageUrl: "/assets/images/web.png",
        description: "Drive impactful marketing strategies with dynamic automation platforms that streamline and enhance your marketing efforts. Automate email campaigns, lead generation, and social media interactions to engage your audience with precision. Marketing automation platforms deliver personalized experiences and actionable insights, fueling your brand’s growth and success.",
        // keyServices: [
        //   {
        //     title: "Database Design",
        //     description: "Create schema and structure for your data."
        //   },
        //   {
        //     title: "Database Development",
        //     description: "Implement databases using appropriate technologies."
        //   },
        //   {
        //     title: "Performance Optimization",
        //     description: "Enhance database performance and speed."
        //   },
        //   {
        //     title: "Backup & Recovery",
        //     description: "Implement strategies for data protection and recovery."
        //   }
        // ]
      },
      {
        id: 8,
        title: "Document Management Systems (DMS)",
        btnText: "DM Systems",
        imageUrl: "/assets/images/web.png",
        description: "Transform document handling with advanced DMS solutions that automate the storage, retrieval, and management of critical documents. Streamline workflows, enhance security, and ensure compliance with efficient document handling practices. DMS solutions empower your team to access, share, and manage documents seamlessly, boosting productivity and organizational effectiveness.",
        // keyServices: [
        //   {
        //     title: "Bug Fixes",
        //     description: "Resolve issues and bugs as they arise."
        //   },
        //   {
        //     title: "Performance Monitoring",
        //     description: "Track and improve system performance."
        //   },
        //   {
        //     title: "Updates & Upgrades",
        //     description: "Apply software updates and new features."
        //   },
        //   {
        //     title: "Technical Support",
        //     description: "Offer assistance and troubleshooting."
        //   }
        // ]
      },
      {
        id: 9,
        title: "Custom Automation System Development",
        btnText: "Custom Automation System",
        imageUrl: "/assets/images/web.png",
        description: "Unlock the full potential of your business with bespoke automation system development tailored to your unique needs. Create custom solutions that integrate and optimize your specific processes, from specialized software to seamless system integrations. Custom automation delivers a personalized approach to enhance efficiency, streamline operations, and drive business growth with precision.",
        // keyServices: [
        //   {
        //     title: "Bug Fixes",
        //     description: "Resolve issues and bugs as they arise."
        //   },
        //   {
        //     title: "Performance Monitoring",
        //     description: "Track and improve system performance."
        //   },
        //   {
        //     title: "Updates & Upgrades",
        //     description: "Apply software updates and new features."
        //   },
        //   {
        //     title: "Technical Support",
        //     description: "Offer assistance and troubleshooting."
        //   }
        // ]
      },]
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