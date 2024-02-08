import { StyleSheet, View, Image } from 'react-native'
import StyledText from '../components/StyledText'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bison.jpg')}
        style={styles.image}
        // contentFit='cover'
      />
      <View style={styles.headingContainer}>
        <StyledText style={styles.heading}>Login to your account</StyledText>
        <StyledText>Welcome back! Please enter your details</StyledText>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
        <StyledText style={styles.bottomText}>
          Don't have an account? Sign up here
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    maxHeight: '25%',
  },

  headingContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
  },
  bottomText: {
    marginTop: 8,
    textAlign: 'center',
  },
})

export default Login
