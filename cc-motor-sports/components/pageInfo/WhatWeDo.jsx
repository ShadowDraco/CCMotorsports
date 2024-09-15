import {
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';

const services = [
  'Tune Up',
  'Services',
  'Race Pres',
  'Performance',
  'Suspension',
  'Accessories',
  'Engine Rebuilds',
];

const services2 = [
  'Mobile / On-Site',
  'Pick ups',
  'Deliveries',
  'Dirt Bikes',
  'Watercraft',
  'Atvs',
  'SxSs',
];

export default function WhatWeDo() {
  return (
    <Container>
      <Heading
        my={7}
        textAlign={'center'}
      >
        What do we do?
      </Heading>
      <Flex
        color='whiteAlpha.900'
        justifyContent={'space-between'}
      >
        <List spacing='3'>
          {services.map((service, i) => {
            return (
              <ListItem>
                <Text fontSize={'large'}>{service}</Text>
              </ListItem>
            );
          })}
        </List>
        <List spacing='3'>
          {services2.map((service, i) => {
            return (
              <ListItem>
                <Text
                  textAlign='right'
                  fontSize={'large'}
                >
                  {service}
                </Text>
              </ListItem>
            );
          })}
        </List>
      </Flex>

      <Heading
        textAlign={'center'}
        my={9}
      >
        Where are we located?
      </Heading>
    </Container>
  );
}
