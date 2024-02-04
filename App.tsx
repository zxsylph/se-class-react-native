import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

import CameraPage from '@/components/CameraPage'
import Jotai from '@/components/Jotai'
import Jotai2 from '@/components/Jotai2'
import MyLocation from '@/components/MyLocation'

const Stack = createNativeStackNavigator()

export default function App() {
  console.log('App')
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Jotai"
          component={Jotai}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Jotai2" component={Jotai2} />
        <Stack.Screen name="Location" component={MyLocation} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
