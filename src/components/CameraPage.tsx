import { useCallback, useEffect, useRef } from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import {
  Camera,
  useCameraDevice,
  useCameraPermission
} from 'react-native-vision-camera'

function CameraPage() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice('back')
  const camera = useRef<Camera>(null)

  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }
  }, [])

  const takePhoto = useCallback(async () => {
    try {
      if (camera.current == null) throw new Error('Camera ref is null!')

      console.log('Taking photo...')
      const photo = await camera.current.takePhoto()
      console.log(photo)
    } catch (e) {
      console.error('Failed to take photo!', e)
    }
  }, [camera])

  if (device == null) return <Text>No Camera Detect</Text>
  return (
    <>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Button onPress={takePhoto} title="Take Photo"></Button>
    </>
  )
}

export default CameraPage
