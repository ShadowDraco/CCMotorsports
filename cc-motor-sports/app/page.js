'use client'
import { Box, Heading } from '@chakra-ui/react'

import MainHeadingBanner from '@/components/MainHeading'
import GoogleMap from '@/components/CustomGoogleMap'

const bgColor1 = '#ff2342'
const bgColor2 = '#f23434'
const bgColor3 = '#ff5f2f'

export default function Home() {
  return (
    <Box
      width={'100vw'}
      height={'150%'}
      bgImage={`linear-gradient(50deg, ${bgColor1} 0%, ${bgColor2} 50%, ${bgColor3} 100%)`}
    >
      <MainHeadingBanner />
      <Heading textAlign={'center'}>What do we do?</Heading>
      <GoogleMap address='411 w. Alru st. Rialto CA 92376' />
    </Box>
  )
}
