import { Center, Heading, Text, Flex, Link } from '@chakra-ui/react'
import React from 'react'

export default function WhoAmI({ colorScheme }) {
  return (
    <Center backgroundColor={'blackAlpha.700'} mb={3} p={3} pb={3}>
      <Flex flexDir='column' textAlign={'center'}>
        <Heading textAlign={'CENTER'} my={6} color='white'>
          Who are we?
        </Heading>
        <Text fontSize='x-large' color='whiteAlpha.800' fontWeight={'bold'}>
          My name is Chris Costa,{' '}
        </Text>
        <Text fontSize='large' color='whiteAlpha.800' fontWeight={'bold'}>
          Mechanic for 15 years, worked for Yamaha for 8 years
        </Text>
        <br></br>

        <Flex
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          fontSize={'large'}
          my='2'
        >
          <Text color='rgb(255, 80, 0)' fontWeight={'bold'}>
            {' '}
            Call us:{' '}
            <Link color='whiteAlpha.800' href='tel:9092622246' target='_blank'>
              909-262-2246
            </Link>
          </Text>
          <Text color='rgb(255, 80, 0)' fontWeight={'bold'}>
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
