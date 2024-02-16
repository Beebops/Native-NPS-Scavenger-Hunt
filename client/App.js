import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import MainStack from './src/navigation/MainStack'

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  )
}
