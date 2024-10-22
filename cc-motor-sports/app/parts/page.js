'use client'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Text,
  Box,
  Select,
  Button,
  Textarea,
} from '@chakra-ui/react'
import MainHeadingBanner from '../../components/MainHeading'
import HeaderNav from '../../components/MainHeading/HeaderNav'
export default function Page() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [vehicle, setVehicle] = useState('Motorcycle')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const submit = async () => {
    const response = await fetch(
      `/api/parts/${email}/${phone}/${vehicle}/${make}/${model}/${year}/${description}`,
      { method: 'POST' }
    )
    const res = await response.json()

    setMessage(res.success)
  }

  return (
    <Container
      mx='auto'
      className='FadeMeIn'
      flexDir='column'
      boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
      backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
      width='98vw'
      maxWidth={1350}
      height='150%'
      py={5}
    >
      <MainHeadingBanner smallImage={true} />
      <HeaderNav />
      <Text
        sx={{
          pt: 3,
          fontSize: 'large',
          color: 'white',
          textAlign: 'center',
          mb: 5,
        }}
      >
        Order a list of parts through us, providing details about your ride and
        contact info!
      </Text>
      <FormControl
        sx={{
          my: 3,
          p: 3,
          backgroundColor: 'rgba(20, 20, 20, 0.4)',
          margin: 'auto',
          width: '80%',
          maxWidth: 700,
        }}
      >
        <FormLabel sx={{ color: 'white' }}>Email address</FormLabel>
        <Input
          type='email'
          sx={{ color: 'white' }}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />

        <FormLabel sx={{ color: 'white' }}>Phone number</FormLabel>
        <Input
          type='tel'
          sx={{ color: 'white' }}
          onChange={e => {
            setPhone(e.target.value)
          }}
        />

        <FormLabel sx={{ color: 'white' }}>Vehicle</FormLabel>
        <Select
          sx={{ color: 'white', backgroundColor: 'rgba(20, 20, 20, 0.6)' }}
          onChange={e => {
            setVehicle(e.target.value)
          }}
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
        <Input
          type='text'
          sx={{ color: 'white' }}
          onChange={e => {
            setMake(e.target.value)
          }}
        />

        <FormLabel sx={{ color: 'white' }}>Model</FormLabel>
        <Input
          type='text'
          sx={{ color: 'white' }}
          onChange={e => {
            setModel(e.target.value)
          }}
        />

        <FormLabel sx={{ color: 'white' }}>Year</FormLabel>
        <Input
          type='text'
          sx={{ color: 'white' }}
          onChange={e => {
            setYear(e.target.value)
          }}
        />

        <FormLabel sx={{ color: 'white' }}>List of parts</FormLabel>
        <Textarea
          sx={{ color: 'white' }}
          onChange={e => {
            setDescription(e.target.value)
          }}
        />
      </FormControl>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          margin: 'auto',
          width: '75%',
          maxWidth: 700,
          marginTop: 2,
        }}
      >
        <Button
          onClick={() => {
            submit()
          }}
        >
          Submit
        </Button>

        <Text
          sx={{
            color: message === 'success' ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          {message !== '' && `Status: ${message} `}
        </Text>
      </Box>
    </Container>
  )
}
