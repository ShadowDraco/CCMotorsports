'use client'
import { useEffect } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { motion, useAnimate } from 'framer-motion'

import GradientSpan from './wrappers/GradientSpan'
import HeaderFooterIcons from './MainHeading/HeaderFooterIcons'

export default function Footer({ visible }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (visible) {
      animate(scope.current, { opacity: 1, scale: 1 }, { duration: 1 })
    } else {
      animate(scope.current, { opacity: 0, scale: 0.6 }, { duration: 0.5 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])
  return (
    <Flex
      ref={scope}
      initial={{ opacity: 0, scale: 0.5 }}
      as={motion.div}
      opacity={0}
      mt={10}
      p={4}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={3}
      background={'blackAlpha.700'}
      position={'sticky'}
      bottom={0}
    >
      <Heading>
        <GradientSpan color1='#aa0024' color2=' #f20024' color3='#fff'>
          Chris Costa Motorsports
        </GradientSpan>
      </Heading>

      <Flex gap={2} flexDir={'column'}>
        <GradientSpan color1='#ff2234' color2=' #f20024' color3='#fff'>
          Contact us:
        </GradientSpan>
        <HeaderFooterIcons />
      </Flex>
    </Flex>
  )
}
