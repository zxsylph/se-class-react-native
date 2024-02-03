import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

import Jotai from '@/components/Jotai'
import Jotai2 from '@/components/Jotai2'

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
