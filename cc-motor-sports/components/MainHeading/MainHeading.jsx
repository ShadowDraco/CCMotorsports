'use client'

import { Flex, Heading } from '@chakra-ui/react'
import GradientSpan from '../../components/wrappers/GradientSpan'
import HeaderFooterIcons from './HeaderFooterIcons'
import Link from 'next/link'
export default function MainHeading() {
  return (
    <>
      <Flex
        p={4}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={3}
        background={'blackAlpha.700'}
        position={'sticky'}
        top={0}
      >
        <Flex gap={5} flexWrap='wrap' alignItems='center'>
          <Heading>
            <GradientSpan color1='#aa0024' color2=' #f20024' color3='#fff'>
              <Link href='/'>Chris Costa&apos;s Motorsports</Link>
            </GradientSpan>
          </Heading>
        </Flex>

        <Flex gap={2} flexDir={'column'}>
          <GradientSpan color1='#ff2234' color2=' #f20024' color3='#fff'>
            Contact us:
          </GradientSpan>
          <HeaderFooterIcons />
        </Flex>
      </Flex>
    </>
  )
}
