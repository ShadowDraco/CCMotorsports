import React from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsPhone } from 'react-icons/bs';
import { Flex, IconButton } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function HeaderFooterIcons() {
  return (
    <Flex
      gap={2}
      flexWrap={'wrap'}
    >
      <Link
        href='https://instagram.com/CC_Motorsports85'
        target='_blank'
      >
        <IconButton
          icon={<BsInstagram />}
          variant='outline'
          colorScheme='red'
          fontSize='x-large'
        />
      </Link>
      <Link
        href='https://instagram.com/CC_Motorsports85'
        target='_blank'
      >
        <IconButton
          icon={<BsFacebook />}
          variant='outline'
          colorScheme='orange'
          fontSize='x-large'
        />
      </Link>
      <Link
        href='tel:9092622246'
        target='_blank'
      >
        <IconButton
          icon={<BsPhone />}
          variant='outline'
          colorScheme='orange'
          fontSize='x-large'
        />
      </Link>
      <Link
        href='mailto: CCMotorsports85@gmail.com'
        target='_blank'
      >
        <IconButton
          icon={<EmailIcon />}
          variant='outline'
          colorScheme='orange'
          fontSize='x-large'
        />
      </Link>
    </Flex>
  );
}
