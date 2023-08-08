'use client'
import MainHeading from './MainHeading'
import MainHeadingImage from './MainHeadingImage'
import { Flex } from '@chakra-ui/react'
export default function MainHeadingBanner() {
  return (
    <>
      <Flex
        justifyContent='center'
        bgColor={'whiteAlpha.50'}
        flexDir={'column'}
      >
        <MainHeading />
        <MainHeadingImage />
      </Flex>
    </>
  )
}
