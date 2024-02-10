import { View, TextInput, Text } from 'react-native'
import { Formik } from 'formik'
import { loginSchema } from '../validations/loginValidation'
import StyledText from './StyledText'
import StyledButton from './StyledButton'
import { FormStyles } from './FormStyles'

const LoginForm = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        // Simulate successful login
        alert(JSON.stringify(values))
        // Reset form if needed
        actions.resetForm()
        actions.setSubmitting(false)
        // Navigate to user's Home screen
        navigation.navigate('MainTabNavigator', { screen: 'Home' })
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          <StyledText style={FormStyles.label}>Username</StyledText>
          <TextInput
            style={FormStyles.input}
            onChangeText={handleChange('userName')}
            value={values.userName}
            placeholder={'enter your username'}
            autoCapitalize='none'
          />
          {touched.userName && errors.userName && (
            <Text style={FormStyles.error}>{errors.userName}</Text>
          )}
          <StyledText style={FormStyles.label}>Password</StyledText>
          <TextInput
            style={FormStyles.input}
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder={'enter your password'}
            autoCapitalize='none'
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={FormStyles.error}>{errors.password}</Text>
          )}
          <StyledButton onPress={handleSubmit} title='Login' />
        </View>
      )}
    </Formik>
  )
}

export default LoginForm
