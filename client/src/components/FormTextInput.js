import { TextInput, View, Text } from 'react-native'
import { FormStyles } from './FormStyles'

const FormTextInput = ({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry,
  error,
}) => (
  <View>
    <Text style={FormStyles.label}>{label}</Text>
    <TextInput
      label={label}
      style={FormStyles.input}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      autoCapitalize='none'
      secureTextEntry={secureTextEntry}
    />
    {error && <Text style={FormStyles.error}>{error}</Text>}
  </View>
)

export default FormTextInput
