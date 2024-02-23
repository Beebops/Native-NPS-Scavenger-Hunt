import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

const HuntIcon = ({ text, iconName }) => {
  return (
    <View style={styles.container}>
      <FontAwesome6 name={iconName} size={20} color='#A58E91' />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: 4,
    color: '#A58E91',
  },
})

export default HuntIcon
