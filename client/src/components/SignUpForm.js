import { signUpSchema } from '../validations/signupValidation'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import StyledText from './StyledText'
import StyledButton from './StyledButton'

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values))
        actions.resetForm()
        actions.setSubmitting(false)
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.container}>
          <StyledText style={styles.label}>Username</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('userName')}
            onBlur={handleBlur('userName')}
            value={values.userName}
            placeholder='enter a username'
            autoCapitalize='none'
          />
          {touched.userName && errors.userName && (
            <Text style={styles.error}>{errors.userName}</Text>
          )}
          <StyledText style={styles.label}>Email</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='enter your email'
            autoCapitalize='none'
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <StyledText style={styles.label}>Password</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder='enter a password'
            autoCapitalize='none'
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <StyledText style={styles.label}>Confirm Password</StyledText>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            placeholder='confirm password'
            autoCapitalize='none'
            secureTextEntry={true}
          />
          <StyledButton onPress={handleSubmit} title='Signup' />
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

export default SignUpForm
