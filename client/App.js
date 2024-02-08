import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Landing from './src/screens/Landing'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Landing />
      {/* <Login /> */}
      {/* <SignUp /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
