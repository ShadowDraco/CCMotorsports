import { Center, Button } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function MakeAppointment() {
  return (
    <Center backgroundColor={'blackAlpha.300'} mb={3} p={3} pb={3}>
      <Link href='/appointment'>
        <Button>Make an appointment / request</Button>{' '}
      </Link>
    </Center>
  )
}
