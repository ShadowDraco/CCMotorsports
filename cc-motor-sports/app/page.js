'use client';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useRef } from 'react';

import MainHeadingBanner from '@/components/MainHeading';
import GoogleMap from '@/components/CustomGoogleMap';
import MSS from '@/components/pageInfo/MSS';
import WhatWeDo from '@/components/pageInfo/WhatWeDo';
import WhoAmI from '@/components/pageInfo/WhoAmI';
import Footer from '@/components/Footer';
import { useFooterAnimation } from '@/hooks/useFooterAnimation';

const bgColor1 = '#ff2342';
const bgColor2 = '#f23434';
const bgColor3 = '#ff5f2f';

export default function Home() {
  const mainRef = useRef(null);
  const footerVisible = useFooterAnimation(mainRef);

  return (
    <Flex
      mx='auto'
      flexDir='column'
      width={'98vw'}
      height={'150%'}
      bgImage={`linear-gradient(50deg, ${bgColor1} 0%, ${bgColor2} 50%, ${bgColor3} 100%)`}
      ref={mainRef}
    >
      <MainHeadingBanner />
      <WhoAmI />
      <WhatWeDo />
      <GoogleMap address='411 w. Alru st. Rialto CA 92376' />
      <Heading
        my={9}
        textAlign={'center'}
      >
        Our Recent Work
      </Heading>
      <MSS />
      <Footer visible={footerVisible} />
    </Flex>
  );
}
