import { Pressable, Text, StyleSheet } from 'react-native'

const StyledButton = ({ onPress, title, style, disabled }) => {
  const handlePress = () => {
    if (!disabled) {
      onPress()
    }
  }

  const disabledStyle = disabled ? styles.disabledBtn : {}

  return (
    <Pressable
      style={[styles.button, style, disabledStyle]}
      onPress={handlePress}
    >
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
  disabledBtn: {
    opacity: 0.5,
  },
})

export default StyledButton
