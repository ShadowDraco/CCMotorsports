'use client'
import React from 'react'

import Link from 'next/link'
import { Center, Container, Box, Heading } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery'
import { reviewScreenshots } from '../../assets/images'

const reviews = reviewScreenshots.map(image => {
  return {
    original: image.src,
    thumbnail: image.src,
    alt: 'A Bike worked on by CC Motorsports!',
  }
})

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
          <Link target='_blank' href='https://g.co/kgs/sXL68sA'>
            See Our Reviews!
          </Link>
        </Heading>
      </Center>
      <Box>
        <ImageGallery
          items={reviews}
          lazyLoad
          autoPlay
          style={{ maxWidth: '100%' }}
        />
      </Box>
    </Container>
  )
}
