import {
  Center,
  Heading,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'

export default function WhoAmI() {
  return (
    <Center backgroundColor={'blackAlpha.500'} p={3} pb={3}>
      <Flex flexDir='column' mb='3'>
        <Heading textAlign={'center'} my={6} color='white' maxWidth>
          Who are we?
        </Heading>
        <Text
          fontSize='x-large'
          color='whiteAlpha.900'
          textAlign='center'
          fontWeight={'bold'}
          mb='2'
        >
          My name is Chris Costa{' '}
        </Text>
        <Text fontSize='x-large' color='whiteAlpha.900' fontWeight={'bold'}>
          <UnorderedList>
            <ListItem>Mechanic for 20 years:</ListItem>
            <ListItem>Yamaha Motor Corporation for 15 years</ListItem>
          </UnorderedList>
        </Text>

        <Flex
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          fontSize={'large'}
          mt='5'
        >
          <Text color='rgb(255, 80, 0)' fontWeight={'bold'}>
            {' '}
            Call us:{' '}
            <Link color='whiteAlpha.900' href='tel:9092622246' target='_blank'>
              909-262-2246
            </Link>
          </Text>
          <Text color='rgb(255, 80, 0)' fontWeight={'bold'}>
            {' '}
            Email us:{' '}
            <Link
              color='whiteAlpha.900'
              href='mailto:CCMotorsports85@gmail.com'
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
