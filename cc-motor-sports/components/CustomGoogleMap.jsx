'use client'
import { Flex, Center, Button, Box } from '@chakra-ui/react'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'

import { useMemo, useState, useRef, useEffect } from 'react'

const CustomGoogleMap = () => {
  const [mapWidth, setMapWidth] = useState(500)
  const libraries = useMemo(() => ['places'], [])

  useEffect(() => {
    setMapWidth(window.innerWidth - 70)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mapCenter = useMemo(
    () => ({ lat: 34.087791442871094, lng: -117.37747955322266 }),
    []
  )
  const [zoom, setZoom] = useState(14)

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
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
      </Flex>
      <Center py={5} id='map'>
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
    </Box>
  )
}

export default CustomGoogleMap
