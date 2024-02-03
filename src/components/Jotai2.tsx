import { useAtomValue } from 'jotai'
import { Text } from 'react-native'

import { countAtom } from '@/datas/count'

function Jotai2() {
  console.log('Jotai2')
  const count = useAtomValue(countAtom)

  return (
    <>
      <Text>Count: {count}</Text>
      <Text>Open up App.js to start working on your app!!!</Text>
    </>
  )
}

export default Jotai2
