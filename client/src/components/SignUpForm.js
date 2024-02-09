import { signUpSchema } from '../validations/signupValidation'
import { View, TextInput, Text } from 'react-native'
import { Formik } from 'formik'
import StyledText from './StyledText'
import StyledButton from './StyledButton'
import { FormStyles } from './FormStyles'

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
        <View>
          <StyledText style={FormStyles.label}>Username</StyledText>
          <TextInput
            style={FormStyles.input}
            onChangeText={handleChange('userName')}
            onBlur={handleBlur('userName')}
            value={values.userName}
            placeholder='enter a username'
            autoCapitalize='none'
          />
          {touched.userName && errors.userName && (
            <Text style={FormStyles.error}>{errors.userName}</Text>
          )}
          <StyledText style={FormStyles.label}>Email</StyledText>
          <TextInput
            style={FormStyles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='enter your email'
            autoCapitalize='none'
          />
          {touched.email && errors.email && (
            <Text style={FormStyles.error}>{errors.email}</Text>
          )}
          <StyledText style={FormStyles.label}>Password</StyledText>
          <TextInput
            style={FormStyles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder='enter a password'
            autoCapitalize='none'
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={FormStyles.error}>{errors.password}</Text>
          )}
          <StyledText style={FormStyles.label}>Confirm Password</StyledText>
          <TextInput
            style={FormStyles.input}
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

export default SignUpForm
