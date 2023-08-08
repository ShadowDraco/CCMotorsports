'use client'
import Link from 'next/link'

import { Flex, Heading, IconButton } from '@chakra-ui/react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import GradientSpan from '@/components/GradientSpan'

export default function MainHeading() {
  return (
    <Flex
      p={4}
      alignItems={'center'}
      justifyContent={'center'}
      gap={3}
      background={'blackAlpha.700'}
      position={'sticky'}
      top={0}
    >
      <Heading>
        <GradientSpan color1='#aa0024' color2=' #f20024' color3='#fff'>
          Chris Costa Motorsports
        </GradientSpan>
      </Heading>

      <Link href='https://instagram.com/CC_Motorsports85' target='_blank'>
        <IconButton
          icon={<BsInstagram />}
          variant='outline'
          colorScheme='red'
          fontSize='x-large'
        />
      </Link>
      <Link href='https://instagram.com/CC_Motorsports85' target='_blank'>
        <IconButton
          icon={<BsFacebook />}
          variant='outline'
          colorScheme='orange'
          fontSize='x-large'
        />
      </Link>
    </Flex>
  )
}
