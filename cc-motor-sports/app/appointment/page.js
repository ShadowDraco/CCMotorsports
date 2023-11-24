'use client'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Text,
  Select,
} from '@chakra-ui/react'
import MainHeadingBanner from '@/components/MainHeading'
export default function page() {
  const submit = () => {
    // localhost:3000/api/appointment/${email}/${phone}/${vehicle}/${make}/${model}/${year}/${description}
  }

  return (
    <Container
      mx='auto'
      flexDir='column'
      boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
      backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
      width='98vw'
      maxWidth={1350}
      height='150%'
      py={5}
    >
      <MainHeadingBanner smallImage={true} />
      <Text
        sx={{ pt: 3, fontSize: 'large', color: 'white', textAlign: 'center' }}
      >
        To set up an appointment, fill out the form and you will be emailed back
        soon! Your information will be secure
      </Text>
      <FormControl
        sx={{ my: 3, p: 3, backgroundColor: 'rgba(20, 20, 20, 0.4)' }}
      >
        <FormLabel sx={{ color: 'white' }}>Email address</FormLabel>
        <Input type='email' sx={{ color: 'white' }} />

        <FormLabel sx={{ color: 'white' }}>Phone Number</FormLabel>
        <Input type='tel' sx={{ color: 'white' }} />

        <FormLabel sx={{ color: 'white' }}>Vehicle</FormLabel>
        <Select
          sx={{ color: 'white', backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
        >
          <option
            value='option1'
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
          >
            Motorcycle
          </option>
          <option
            value='option2'
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
          >
            Dirt Bike
          </option>
          <option
            value='option3'
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
          >
            Quad/ATV
          </option>
          <option
            value='option3'
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
          >
            Boat
          </option>
        </Select>

        <FormLabel sx={{ color: 'white' }}>Make</FormLabel>
        <Input type='text' sx={{ color: 'white' }} />

        <FormLabel sx={{ color: 'white' }}>Model</FormLabel>
        <Input type='text' sx={{ color: 'white' }} />

        <FormLabel sx={{ color: 'white' }}>Year</FormLabel>
        <Input type='text' sx={{ color: 'white' }} />

        <FormLabel sx={{ color: 'white' }}>Describe the situation</FormLabel>
        <Input type='text' sx={{ color: 'white' }} />
      </FormControl>
    </Container>
  )
}
