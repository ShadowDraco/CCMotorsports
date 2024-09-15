import { Center, Heading, Text, Flex, Link } from '@chakra-ui/react'
import React from 'react'

export default function WhoAmI({ colorScheme }) {
  return (
    <Center
      backgroundColor={
        colorScheme === 'red' ? 'blackAlpha.200' : 'blackAlpha.400'
      }
      my={3}
      p={3}
      pb={3}
    >
      <Flex flexDir='column' textAlign={'center'}>
        <Heading textAlign={'CENTER'} my={6}>
          Who are we?
        </Heading>
        <Text fontSize='x-large' color='blackAlpha.800'>
          My name is Chris Costa,{' '}
        </Text>
        <Text fontSize='large' color='blackAlpha.800'>
          Mechanic for 15 years, worked for Yamaha for 8 years
        </Text>
        <br></br>

        <Flex
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          fontSize={'large'}
          my='2'
        >
          <Text color='blackAlpha.800'>
            {' '}
            Call us:{' '}
            <Link color='whiteAlpha.800' href='tel:9092622246' target='_blank'>
              909-262-2246
            </Link>
          </Text>
          <Text color='blackAlpha.800'>
            {' '}
            Email us:{' '}
            <Link
              color='whiteAlpha.800'
              href='mailto: CCMotorsports85@gmail.com'
              target='_blank'
            >
              CCMotorsports85
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Center>
  )
}
