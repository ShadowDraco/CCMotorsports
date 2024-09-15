'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Center, Container, Box, Heading } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { reviewScreenshots } from '../../assets/images'

export default function Reviews() {
  return (
    <Container
      mx='auto'
      flexDir='column'
      boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
      backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
      width='98vw'
      maxWidth={1350}
      py={5}
    >
      <Center>
        <Heading color={'white'} textDecoration='underline'>
          <Link
            target='_blank'
            href='https://www.google.com/search?q=cc+motorsports&oq=&gs_lcrp=EgZjaHJvbWUqCQgCEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQoxNzI1MzlqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8&pccc=1#lrd=0x80c34d232e8489a9:0x4256027567692af4,1,,,,'
          >
            See Our Reviews!
          </Link>
        </Heading>
      </Center>
      <Center sx={{ pt: 6 }}>
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
                <Image
                  src={screenshot.src}
                  alt='Screenshot of a google review'
                  width={500}
                  height={500}
                  layout='responsive'
                  style={{
                    maxWidth: 500,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            )
          })}
        </Carousel>
      </Center>
    </Container>
  )
}
