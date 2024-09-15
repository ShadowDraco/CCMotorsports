'use client'
import React from 'react'

import { Box } from '@chakra-ui/react'

import ImageGallery from 'react-image-gallery'
import { motorcycleScreenshots } from '../../assets/images'
const screenshots = motorcycleScreenshots.map(image => {
  return {
    original: image.src,
    thumbnail: image.src,
    alt: 'A Bike worked on by CC Motorsports!',
  }
})
export default function MSS() {
  return (
    <Box sx={{ my: 5 }}>
      <ImageGallery
        items={screenshots}
        lazyLoad
        autoPlay
        style={{ maxWidth: '100%', }}
      />
    </Box>
  )
}
