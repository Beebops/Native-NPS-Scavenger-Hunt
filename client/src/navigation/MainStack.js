import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Landing from '../screens/Landing'
import Hunts from '../screens/Hunts'
import Favorites from '../screens/Favorites'
import PhotoGallery from '../screens/PhotoGallery'
import MainTabNavigator from './MainTabNavigator'
import CreateHunt from '../screens/CreateHunt'
import Hunt from '../screens/Hunt'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#230E10',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
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
        name='Hunts'
        component={Hunts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PhotoGallery'
        component={PhotoGallery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreateHunts'
        component={CreateHunt}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Hunt'
        component={Hunt}
        options={({ route }) => ({
          title: route.params.huntTitle,
          headerBackTitleVisible: false,
        })}
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
