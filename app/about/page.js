import CollaboratedBrands from '@/components/CollaboratedBrands';
import FounderMessage from '@/components/FounderMessage';
import MeetingChat from '@/components/MeetingChat';
import MissionVision from '@/components/MissionVision';
import Reviews from '@/components/Reviews';
import Statistics from '@/components/Statistics';
import React from 'react'

function page() {
  return (
    <>
        <Statistics />
        <MissionVision />
        <Reviews />
        <CollaboratedBrands />
        <FounderMessage />
        <MeetingChat />
    </>
  )
}

export default page;