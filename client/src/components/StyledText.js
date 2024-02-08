import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#261E1F',
  },
})

const StyledText = ({ style, children, ...props }) => (
  <Text style={[styles.defaultTextStyle, style]} {...props}>
    {children}
  </Text>
)

export default StyledText
