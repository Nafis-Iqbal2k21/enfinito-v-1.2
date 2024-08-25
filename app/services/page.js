import CollaboratedBrands from '@/components/CollaboratedBrands';
import MeetingChat from '@/components/MeetingChat';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import Banner from '@/components/Services/Banner';
import Slider from '@/components/Slider';
import WorkProcess from '@/components/WorkProcess';
import React from 'react'

function page() {
  return (
    <>
      <Banner />
      <Slider />
      <Services />
      <WorkProcess />
      <Reviews />
      <CollaboratedBrands />
      <MeetingChat />
    </>
  )
}

export default page;