import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Camera from '../screens/Camera'
import CreateHunt from '../screens/CreateHunt'
import Logout from '../screens/Logout'
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'cabin'
          } else if (route.name === 'New Hunt') {
            iconName = 'format-list-bulleted-add'
          } else if (route.name === 'Camera') {
            iconName = 'photo-camera'
          } else if (route.name === 'Logout') {
            iconName = 'logout'
          }
          return <MaterialIcons name={iconName} size={24} color={color} />
        },
        tabBarStyle: {
          backgroundColor: '#230E10',
          paddingTop: 6,
          paddingBottom: 6,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#916569',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Camera' component={Camera} />
      <Tab.Screen name='New Hunt' component={CreateHunt} />
      <Tab.Screen name='Logout' component={Logout} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
