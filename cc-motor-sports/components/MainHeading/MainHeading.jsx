'use client';

import { Flex, Heading, } from '@chakra-ui/react';
import GradientSpan from '@/components/wrappers/GradientSpan';
import HeaderFooterIcons from './HeaderFooterIcons';

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
        <GradientSpan
          color1='#aa0024'
          color2=' #f20024'
          color3='#fff'
        >
          Chris Costa Motorsports
        </GradientSpan>
      </Heading>

      <HeaderFooterIcons />
    </Flex>
  );
}
