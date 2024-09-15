'use client'
import { Box, Button, Flex, Center, Heading, Input } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'

import MainHeadingBanner from '@/components/MainHeading'
import GoogleMap from '@/components/CustomGoogleMap'
import MSS from '@/components/pageInfo/MSS'
import WhatWeDo from '@/components/pageInfo/WhatWeDo'
import WhoAmI from '@/components/pageInfo/WhoAmI'
import Footer from '@/components/Footer'
import { motion, useAnimate } from 'framer-motion'
import { useFooterAnimation } from '@/hooks/useFooterAnimation'

export default function Home() {
  const [colorScheme, setColorScheme] = useState('red')
  const [bgColor1, setBgColor1] = useState('#f02300')
  const [bgColor2, setBgColor2] = useState('#fff034')
  const [bgColor3, setBgColor3] = useState('#ff5f2a')

  const toggleColors = () => {
    if (colorScheme === 'red') {
      setColorScheme('orange')
      setBgColor1('#ff2342')
      setBgColor2('#ffaa00')
      setBgColor3('#fff')
    } else {
      setColorScheme('red')
      setBgColor1('#aa0024')
      setBgColor2('#fa2340')
      setBgColor3('#ff5f2a')
    }
  }

  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(false)
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
    <Box ref={mainRef}>
      {verified ? (
        <Flex
          as={motion.div}
          ref={scope}
          initial={{ opacity: 0, scale: 0.5 }}
          opacity={0}
          mx='auto'
          flexDir='column'
          width={'98vw'}
          height={'150%'}
          bgImage={`linear-gradient(180deg, ${bgColor1} 0%, ${bgColor2} 50%, ${bgColor3} 100%)`}
        >
          <MainHeadingBanner
            toggleColors={toggleColors}
            colorScheme={colorScheme}
          />
          <WhoAmI colorScheme={colorScheme} />
          <WhatWeDo colorScheme={colorScheme} />
          <GoogleMap address='411 w. Alru st. Rialto CA 92376' />
          <Heading my={9} textAlign={'center'}>
            Our Recent Work
          </Heading>
          <MSS />
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
    </Box>
  )
}
