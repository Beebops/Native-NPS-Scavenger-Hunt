import { View, Text } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

const HuntIcon = ({ text, iconName }) => {
  return (
    <View>
      <View>
        <FontAwesome6 name={iconName} size={20} color='#A58E91' />
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default HuntIcon
