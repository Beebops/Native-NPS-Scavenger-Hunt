import { Pressable, Text, StyleSheet } from 'react-native'

const StyledButton = ({ onPress, title, style }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3F5800',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginHorizontal: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default StyledButton
