import Geolocation from '@react-native-community/geolocation'
import { Text } from 'react-native'

Geolocation.getCurrentPosition((info) => console.log(info))

function MyLocation() {
  return (
    <>
      <Text>Geo Location</Text>
      <Text></Text>
    </>
  )
}

export default MyLocation
