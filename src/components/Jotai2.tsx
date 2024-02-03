import { useAtom } from 'jotai'
import { Button, Text } from 'react-native'

import { countAtom } from '@/datas/count'

function Jotai2(props) {
  console.log('Jotai2')
  const { navigation } = props
  const [count, setCounter] = useAtom(countAtom)
  const onClick = () => setCounter((prev) => prev + 1)
  const onLink = () => {
    navigation.navigate('Jotai', { name: 'Jane' })
  }

  return (
    <>
      <Text>Count: {count}</Text>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Button onPress={onLink} title="Link"></Button>
      <Button onPress={onClick} title="Press me"></Button>
    </>
  )
}

export default Jotai2
