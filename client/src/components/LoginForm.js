import { View, TextInput, Text, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import { loginSchema } from '../validations/loginValidation'
import StyledText from './StyledText'
import StyledButton from './StyledButton'

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values))
        actions.resetForm()
        actions.setSubmitting(false)
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          <StyledText style={styles.label}>Username</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('userName')}
            value={values.userName}
            placeholder={'enter your username'}
            autoCapitalize='none'
          />
          {touched.userName && errors.userName && (
            <Text style={styles.error}>{errors.userName}</Text>
          )}
          <StyledText style={styles.label}>Password</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder={'enter your password'}
            autoCapitalize='none'
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <StyledButton onPress={handleSubmit} title='Login' />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A58E91',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  error: {
    color: '#E97334',
    marginBottom: 10,
  },
})

export default LoginForm
