'use client'
import { Container } from '@chakra-ui/react'
import MainHeadingBanner from '../../components/MainHeading'
import HeaderNav from '../../components/MainHeading/HeaderNav'
import WhatWeDo from '../../components/pageInfo/WhatWeDo'
import MakeAppointment from '../../components/pageInfo/MakeAppointment'
import WhoAmI from '../../components/pageInfo/WhoAmI'
import React from 'react'

export default function Page() {
  return (
    <Container
      mx='auto'
      className='FadeMeIn'
      flexDir='column'
      boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
      backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
      width='98vw'
      maxWidth={1350}
      height='150%'
      py={5}
    >
      <MainHeadingBanner smallImage={true} />
      <HeaderNav />
      <WhoAmI />
      <MakeAppointment />
      <WhatWeDo />
    </Container>
  )
}
