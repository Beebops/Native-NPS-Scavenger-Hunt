import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import StyledText from '../components/StyledText'
import SignUpForm from '../components/SignUpForm'
import HeaderImage from '../components/HeaderImage'

const SignUp = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderImage source={require('../assets/images/coyote.jpg')} />
      <View style={styles.headingContainer}>
        <StyledText style={styles.heading}>Create an account</StyledText>
        <StyledText>Welcome! Please enter your details</StyledText>
      </View>
      <View style={styles.formContainer}>
        <SignUpForm />
        <View style={styles.inlineTextContainer}>
          <StyledText style={styles.bottomText}>
            Already have an account?
          </StyledText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <StyledText style={[styles.bottomText]}> Login here</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 25,
    textAlign: 'center',
  },
  inlineTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
})

export default SignUp
