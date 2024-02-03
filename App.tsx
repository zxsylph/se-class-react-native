import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Jotai from '@/components/Jotai'
import Jotai2 from '@/components/Jotai2'

export default function App() {
  console.log('App')
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Jotai></Jotai>
        <Jotai2></Jotai2>
        <StatusBar style="auto" />
      </View>
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
