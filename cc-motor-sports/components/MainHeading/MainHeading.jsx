'use client'
import { ViewIcon } from '@chakra-ui/icons'
import { Flex, Heading, IconButton } from '@chakra-ui/react'
import GradientSpan from '@/components/wrappers/GradientSpan'
import HeaderFooterIcons from './HeaderFooterIcons'

export default function MainHeading({ toggleColors, colorScheme }) {
  return (
    <Flex
      p={4}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      gap={3}
      background={'blackAlpha.700'}
      position={'sticky'}
      top={0}
    >
      <Flex gap={3} flexWrap='wrap'>
        <Heading>
          <GradientSpan color1='#aa0024' color2=' #f20024' color3='#fff'>
            Chris Costa Motorsports
          </GradientSpan>
        </Heading>
      
      </Flex>

      <Flex gap={2} flexDir={'column'}>
        <GradientSpan color1='#ff2234' color2=' #f20024' color3='#fff'>
          Contact us:
        </GradientSpan>
        <HeaderFooterIcons toggleColors={toggleColors} />
      </Flex>
    </Flex>
  )
}
