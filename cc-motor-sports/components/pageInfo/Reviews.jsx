'use client'
import React from 'react'

import Link from 'next/link'
import { Center, Box, Heading } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { reviewScreenshots } from '../../assets/images'

export default function Reviews() {
  return (
    <>
      <Center>
        <Link
          target='_blank'
          href='https://www.google.com/search?q=cc+motorsports&oq=&gs_lcrp=EgZjaHJvbWUqCQgCEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQoxNzI1MzlqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8&pccc=1#lrd=0x80c34d232e8489a9:0x4256027567692af4,1,,,,'
        >
          <Heading color={'white'}>See Our Reviews!</Heading>
        </Link>
      </Center>
      <Center sx={{ py: 6 }}>
        <Carousel
          autoPlay={true}
          infiniteLoop
          interval={4000}
          showArrows={true}
          showIndicators
          emulateTouch
          swipeable
          style={{ width: '80%' }}
        >
          {reviewScreenshots?.map((screenshot, i) => {
            return (
              <Box key={i}>
                <img
                  src={screenshot.src}
                  alt='Screenshot of a google review'
                  style={{ maxWidth: 500, objectFit: 'cover', maxHeight: 500 }}
                />
              </Box>
            )
          })}
        </Carousel>
      </Center>
    </>
  )
}
