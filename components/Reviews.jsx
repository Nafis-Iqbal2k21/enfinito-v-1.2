'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from './SectionTitle';



function Reviews() {
    const reviewsData = [
        {
            imgUrl: "/assets/images/founder.png",
            name: "Asif Khan",
            post: "Managing Director",
            company: "Shah Ali Farm",
            review: "Outstanding service in minimalistic and creative logo and design solutions. We are excited to continue collaborating on future projects."
        },
        {
            imgUrl: "/assets/images/founder.png",
            name: "Mamun Hasan",
            post: "Chief Executive Officer",
            company: "Explore It",
            review: "Explore has been highly impressed with Enfinito's outstanding design and marketing support. Your expertise and creativity have made a significant impact on our projects. We look forward to continuing our collaboration."
        },
        {
            imgUrl: "/assets/images/founder.png",
            name: "Ismail Mia",
            post: "Co-Founder",
            company: "Momo Mama",
            review: "MoMo MaMa is grateful for Enfinito's exceptional design and marketing support. Your innovative solutions have significantly boosted our sales and enhanced our brand. We look forward to continuing our successful partnership"
        },
        {
            imgUrl: "/assets/images/founder.png",
            name: "Abdul Azad",
            post: "Founder & CEO",
            company: "EMS Engineering",
            review: "EMS Engineering appreciates Enfinito's outstanding design and marketing support. Your expertise has effectively elevated our brand and boosted our sales. We value your contributions and look forward to future collaborations"
        },
        {
            imgUrl: "/assets/images/founder.png",
            name: "Saiful islam Shoeb",
            post: "Founder",
            company: "Kidz Land",
            review: "Kidz Land is happy with Enfinito's design and marketing support. Your efforts have helped improve our brand and boost our sales. We look forward to future collaborations."
        },
    ];
    return (
        <div className="container">
            <SectionTitle
                title={"What Our Clients Are Saying"}
                description={"Discover how our solutions have made a real difference for our clients through their genuine feedback and success stories"}
            />
            <div className='mx-auto'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >


                    {
                        reviewsData.map((data, index) => <SwiperSlide className='mb-3' key={index}>
                            <div className="mb-4 py-3">
                                <div className='review-card d-flex flex-column align-items-center justify-content-center'>
                                    <div className="client  d-flex">
                                        <div>
                                            <img src={data.imgUrl} alt={data.name} className='client-img ' />
                                        </div>
                                        <div>
                                            <h6 className="card-title px-3">{data.name}</h6>
                                            <p className='d-flex fst-italic description-mini' style={{ color: "#A3A3A9" }}>{data.post}&nbsp;<a href="#" className='nav-link text-primary'> @{data.company}</a></p>
                                        </div>
                                    </div>
                                    <p className="card-text text-center description-mini">{data.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default Reviews;