import { Center, Heading, Text, Flex, Link } from '@chakra-ui/react';
import React from 'react';

export default function WhoAmI() {
  return (
    <Center
      backgroundColor='blackAlpha.300'
      my={3}
    >
      <Flex
        flexDir='column'
        textAlign={'center'}
      >
        <Heading
          textAlign={'CENTER'}
          my={6}
        >
          Who are we?
        </Heading>
        <Text fontSize='x-large'>My name is Chris Costa, </Text>
        <Text fontSize='large'>
          Mechanic for 15 years, worked for Yamaha for 8 years
        </Text>
        <br></br>

        <Flex
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          fontSize={'large'}
          my='2'
        >
          <Text>
            {' '}
            Call us:{' '}
            <Link
              color='whiteAlpha.800'
              href='tel:9092622246'
              target='_blank'
            >
              909-262-2246
            </Link>
          </Text>
          <Text>
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
  );
}
