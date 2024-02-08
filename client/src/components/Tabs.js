import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Login' component={Login} />
      <Tab.Screen name='SignUp' component={SignUp} />
    </Tab.Navigator>
  )
}

export default Tabs
