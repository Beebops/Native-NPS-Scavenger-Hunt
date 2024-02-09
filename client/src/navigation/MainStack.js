import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Landing from '../screens/Landing'
import MainTabNavigator from './MainTabNavigator'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen
        name='Landing'
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MainTabNavigator'
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
