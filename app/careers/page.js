import Banner from '@/components/Careers/Banner';
import EmployeeBenefits from '@/components/Careers/EmployeeBenefits';
import FAQ from '@/components/Careers/FAQ';
import Jobs from '@/components/Careers/Jobs';
import MeetingChat from '@/components/MeetingChat';
import UnderDevelopment from '@/components/UnderDevelopment';
import React from 'react'

function page() {
  return (
    <>
        <Banner />
        <EmployeeBenefits />
        <Jobs />
        <FAQ />
        <MeetingChat />
    </>
  )
}

export default page;