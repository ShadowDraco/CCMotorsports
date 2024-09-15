'use client'
import React from 'react'
import { Heading, Container } from '@chakra-ui/react'
import MSS from '../../components/pageInfo/MSS'
import MainHeadingBanner from '../../components/MainHeading'
export default function page() {
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
      <Heading my={9} textAlign={'center'} color='white'>
        Our Recent Work
      </Heading>
      <MSS />
    </Container>
  )
}
