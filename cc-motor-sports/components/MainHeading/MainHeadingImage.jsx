import React from 'react'
import Image from 'next/image'
import CCBANNER from '../../assets/CCMotorsportsBanner.webp'
import { Center } from '@chakra-ui/react'

export default function MainHeadingImage() {
  return (
    <Center sx={{ backgroundColor: 'black' }}>
      <Image
        src={CCBANNER}
        width={CCBANNER.width}
        height={CCBANNER.height}
        alt='CC Motorsports Banner'
        layout='responsive'
      />
    </Center>
  )
}
