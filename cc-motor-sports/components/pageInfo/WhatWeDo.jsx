import {
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'

const services = [
  'Tune Up',
  'Services',
  'Race Pres',
  'Performance',
  'Suspension',
  'Accessories',
  'Engine Rebuilds',
]

const services2 = [
  'Mobile / On-Site',
  'Pick ups',
  'Deliveries',
  'Dirt Bikes',
  'Watercraft',
  'Atvs',
  'SxSs',
]

export default function WhatWeDo() {
  return (
    <Container my={4} p={3} backgroundColor={'blackAlpha.400'}>
      <Heading mb={3} textAlign={'center'} color='white'>
        We specialize in
      </Heading>
      <Flex color='whiteAlpha.900' justifyContent={'space-between'}>
        <List spacing='3'>
          {services.map((service, i) => {
            return (
              <ListItem key={i}>
                <Text fontSize={'large'}>{service}</Text>
              </ListItem>
            )
          })}
        </List>
        <List spacing='3'>
          {services2.map((service, i) => {
            return (
              <ListItem key={i}>
                <Text textAlign='right' fontSize={'large'} fontWeight={'bold'}>
                  {service}
                </Text>
              </ListItem>
            )
          })}
        </List>
      </Flex>
    </Container>
  )
}
