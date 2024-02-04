import Geolocation from '@react-native-community/geolocation'
import { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'

function MyLocation() {
  console.log('MyLocation')

  const [location, setLocation] = useState<any>(null)

  useEffect(() => {
    console.log('MyLocation useEffect')

    Geolocation.getCurrentPosition((info) => {
      console.log('info', info)
      setLocation(info)
    })
  }, [])

  useEffect(() => {
    console.log('location', location)
  }, [location])

  const onPress = () => {
    setLocation(null)
  }

  return (
    <>
      <Text>Geo Location</Text>
      <Text>{location?.coords?.latitude}</Text>
      <Button onPress={onPress} title="Set Null"></Button>
    </>
  )
}

export default MyLocation
