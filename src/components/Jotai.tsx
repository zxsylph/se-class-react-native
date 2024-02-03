import { useAtom } from 'jotai'
import { Button, Text } from 'react-native'

import { countAtom } from '@/datas/count'

function Jotai() {
  console.log('Jotai')
  const [count, setCounter] = useAtom(countAtom)
  const onClick = () => setCounter((prev) => prev + 1)

  return (
    <>
      <Text>Count: {count}</Text>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Button onPress={onClick} title="Press me"></Button>
    </>
  )
}

export default Jotai
