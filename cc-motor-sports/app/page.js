'use client'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import GoogleMap from '../components/CustomGoogleMap'
import HeaderNav from '../components/MainHeading/HeaderNav'
import WhatWeDo from '../components/pageInfo/WhatWeDo'
import MakeAppointment from '../components/pageInfo/MakeAppointment'
import WhoAmI from '../components/pageInfo/WhoAmI'
import Reviews from '../components/pageInfo/Reviews'
import Footer from '../components/Footer'
import { motion, useAnimate } from 'framer-motion'
import { useFooterAnimation } from '../hooks/useFooterAnimation'
import MainHeadingBanner from '../components/MainHeading'

export default function Home() {
  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(true)
  const [scope, animate] = useAnimate()
  const mainRef = useRef(null)

  const footerVisible = useFooterAnimation(mainRef)

  const updatePassword = e => {
    const password = e.target.value
    setPassword(password)
  }

  useEffect(() => {
    if (verified && scope.current) {
      animate(scope.current, { opacity: 1, scale: 1 }, { duration: 1 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verified])

  const checkPassword = async () => {
    if (password !== '') {
      const response = await fetch(`/api/check-password/${password}`, {
        method: 'POST',
      })
      let passwordCorrect = await response.json()
      if (passwordCorrect) {
        setVerified(true)
      }
    }
  }

  return (
    <Box
      ref={mainRef}
      sx={{
        backgroundColor: 'blackAlpha.500',
      }}
    >
      {verified ? (
        <Flex
          className='page'
          as={motion.div}
          ref={scope}
          initial={{ opacity: 0, scale: 0.5 }}
          opacity={0}
          mx='auto'
          flexDir='column'
          boxShadow='0.7em 0 0.5em white, -0.7em 0 0.5em white'
          backgroundImage='linear-gradient(180deg, #aa0024 0%, #fa2340 50%, #ff5f2a 100%)'
          width='98vw'
          maxWidth={1350}
          height='150%'
        >
          <MainHeadingBanner smallImage={false} />
          <HeaderNav />
          <WhoAmI />
          <MakeAppointment />
          <WhatWeDo />
          <Reviews />
          <GoogleMap address='411 w. Alru st. Rialto CA 92376' />

          <Footer visible={footerVisible} />
        </Flex>
      ) : (
        <Flex
          width={'100vw'}
          height='100vh'
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
          gap={3}
        >
          <Heading color='whiteAlpha.700'>Enter the password</Heading>
          <Flex justifyContent={'center'} gap={2}>
            <Input
              color='white'
              w='50%'
              variant={'flushed'}
              placeholder='password'
              onChange={e => {
                updatePassword(e)
              }}
            />
            <Button
              onClick={() => {
                checkPassword()
              }}
            >
              Enter
            </Button>
          </Flex>
        </Flex>
      )}
      <Text sx={{ color: 'white' }}>
        Web Services by{' '}
        <Link
          style={{ color: 'blue' }}
          target='_blank'
          href='https://github.com/shadowdraco'
        >
          Ethan Storm
        </Link>
      </Text>
    </Box>
  )
}
