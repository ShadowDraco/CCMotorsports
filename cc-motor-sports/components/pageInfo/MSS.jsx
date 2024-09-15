'use client'
import React from 'react'

import { Center, Box } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/Image'
import { motorcycleScreenshots } from '../../assets/images'

export default function MSS() {
  return (
    <Center>
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={4000}
        showArrows={true}
        showIndicators
        emulateTouch
        swipeable
        style={{ width: '80%' }}
        noThumbs
      >
        {motorcycleScreenshots?.map((screenshot, i) => {
          return (
            <Box key={i}>
              <Image
                src={screenshot.src}
                width={500}
                height={500}
                priority={true}
                alt='Picture of a serviced motorcycle'
                style={{ maxWidth: 500, objectFit: 'cover', maxHeight: 500 }}
              />
            </Box>
          )
        })}
      </Carousel>
    </Center>
  )
}
