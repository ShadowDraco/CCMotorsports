'use client'
import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
} from '@chakra-ui/react'

export default function page() {
  return (
    <Container
      mx='auto'
      flexDir='column'
      boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
      backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
      width='98vw'
      maxWidth={1350}
      height='150%'
    >
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Container>
  )
}
