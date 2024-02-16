import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import StyledText from '../components/StyledText'
import LoginForm from '../components/LoginForm'
import HeaderImage from '../components/HeaderImage'

const Login = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderImage source={require('../assets/images/bison.jpg')} />
      <View style={styles.headingContainer}>
        <StyledText style={styles.heading}>Login to your account</StyledText>
        <StyledText>Welcome back! Please enter your details</StyledText>
      </View>
      <View style={styles.formContainer}>
        <LoginForm navigation={navigation} />
        <View style={styles.inlineTextContainer}>
          <StyledText style={styles.bottomText}>
            Don't have an account?
          </StyledText>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <StyledText style={[styles.bottomText]}> Sign up here</StyledText>
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
    marginTop: 8,
    textAlign: 'center',
  },
  inlineTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
})

export default Login
