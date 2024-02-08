import { StyleSheet, View, Image } from 'react-native'
import StyledText from '../components/StyledText'
import SignUpForm from '../components/SignUpForm'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/coyote.jpg')}
        style={styles.image}
      />
      <View style={styles.headingContainer}>
        <StyledText style={styles.heading}>Create an account</StyledText>
        <StyledText>Welcome! Please enter your details</StyledText>
      </View>
      <View style={styles.formContainer}>
        <SignUpForm />
        <StyledText style={styles.bottomText}>
          Already have an account? Login here
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

export default SignUp
