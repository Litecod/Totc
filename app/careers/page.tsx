import Accordion from '@/components/Careers/Accordio'
import ApiTemplate from '@/components/Careers/ApiTemplate'
import BeforeFooter from '@/components/Careers/BeforeFooter'
import Learning from '@/components/Careers/Learning'
import Membership from '@/components/Careers/Membership'
import Students from '@/components/Careers/Students'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <Membership />
        <Learning />
        <Accordion />
        <Students />
        <ApiTemplate />
        <BeforeFooter />
        <Footer />
    </div>
  )
}

export default page