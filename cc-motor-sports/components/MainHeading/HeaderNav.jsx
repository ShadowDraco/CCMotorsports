'use client'
import React from 'react'
import { AiFillSchedule } from 'react-icons/ai'
import { TfiGallery } from 'react-icons/tfi'
import { Flex, IconButton, Text, Box } from '@chakra-ui/react'

import Link from 'next/link'
export default function HeaderNav() {
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
      <Box>
        <Link href='/appointment'>
          <Text color='white' fontWeight={'bold'}>
            Appointment
          </Text>
        </Link>
        <Link href='/appointment'>
          <IconButton
            icon={<AiFillSchedule />}
            variant='outline'
            colorScheme='red'
            fontSize='x-large'
          />
        </Link>
      </Box>
      <Box>
        {' '}
        <Link href='/gallery'>
          <Text color='white' fontWeight={'bold'}>
            Gallery
          </Text>
        </Link>
        <Link href='/gallery'>
          <IconButton
            icon={<TfiGallery />}
            variant='outline'
            colorScheme='red'
            fontSize='x-large'
          />
        </Link>
      </Box>
    </Flex>
  )
}
