'use client'
import { Flex, Center, Button, Box, Heading } from '@chakra-ui/react'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'

const CustomGoogleMap = () => {
  const [mapWidth, setMapWidth] = useState(500)
  const libraries = useMemo(() => ['places'], [])

  useEffect(() => {
    setMapWidth(window.innerWidth - 70)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mapCenter = useMemo(() => ({ lat: 34.1010347, lng: -117.3799884 }), [])
  const [zoom, setZoom] = useState(14)

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  })

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <Box backgroundColor='blackAlpha.300' py={3}>
      <Heading textAlign={'center'} my={5} color='white'>
        Where are we located?
      </Heading>

      <Center
        py={5}
        id='map'
        sx={{ width: '70%', maxWidth: 800, margin: 'auto' }}
      >
        <GoogleMap
          options={mapOptions}
          zoom={zoom}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: mapWidth, height: '400px' }}
          onLoad={() => console.log('Map Component Loaded...')}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log('Marker Loaded')}
          />
        </GoogleMap>
      </Center>
      <Flex mt={5} gap={6} w='100%' justifyContent={'center'}>
        <Button
          onClick={() => {
            setZoom(zoom + 1)
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            setZoom(zoom - 1)
          }}
        >
          -
        </Button>
        <Link
          href={`https://www.google.com/maps/place/CC+Motorsports/@34.1010391,-117.3825633,${zoom}z/data=!3m1!4b1!4m6!3m5!1s0x80c34d232e8489a9:0x4256027567692af4!8m2!3d34.1010347!4d-117.3799884!16s%2Fg%2F11vb9m8dyq?entry=ttu`}
          target='_blank'
        >
          <Button>Open in Maps</Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default CustomGoogleMap
