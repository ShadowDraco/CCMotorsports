import { Center, Heading, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function MakeAppointment() {
  return (
    <Center backgroundColor={'blackAlpha.700'} mb={3} p={3} pb={3}>
      <Flex flexDir='column' textAlign={'center'}>
        <Link href='/appointment'>
          <Button>Make an appointment / request</Button>{' '}
        </Link>
      </Flex>
    </Center>
  )
}
