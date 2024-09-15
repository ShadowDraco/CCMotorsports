import React from 'react'
import Image from 'next/image'
import CCBANNER from '../../assets/CCMotorsportsBanner.webp'
import { Center } from '@chakra-ui/react'

export default function MainHeadingImage({smallImage}) {
  return (
    <Center sx={{ backgroundColor: 'black' }}>
      <Image
        src={CCBANNER}
        width={CCBANNER.width}
        height={CCBANNER.height}
        alt='CC Motorsports Banner'
        layout='responsive'
        style={{ maxWidth: !smallImage ? 900 : 500 }}
      />
    </Center>
  )
}
