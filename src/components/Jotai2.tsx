import { useAtomValue } from 'jotai'
import { Button, Text } from 'react-native'

import { countAtom } from '@/datas/count'

function Jotai2(props) {
  console.log('Jotai2')
  const { navigation } = props
  const count = useAtomValue(countAtom)
  const onLink = () => {
    navigation.navigate('Jotai', { name: 'Jane' })
  }

  return (
    <>
      <Text>Count: {count}</Text>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Button onPress={onLink} title="Link"></Button>
    </>
  )
}

export default Jotai2
