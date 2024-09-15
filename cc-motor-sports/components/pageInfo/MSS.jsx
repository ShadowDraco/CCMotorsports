'use client';
import React from 'react';
import Image from 'next/image';
import { List, ListItem, Center } from '@chakra-ui/react';

import { motorcycleScreenshots } from '@/assets/images';

export default function MSS() {
  return (
    <Center>
      <List spacing={3}>
        {motorcycleScreenshots?.map((screenshot, i) => {
          return (
            <ListItem key={i}>
              <Image
                src={screenshot}
                width={screenshot.width}
                height={screenshot.height}
                objectFit='contain'
                objectPosition='center'
                alt='Picture of a serviced motorcycle'
              />
            </ListItem>
          );
        })}
      </List>
    </Center>
  );
}
