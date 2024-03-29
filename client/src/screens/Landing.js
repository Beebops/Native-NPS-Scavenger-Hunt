import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import StyledButton from '../components/StyledButton'

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode='cover'
        source={require('../assets/images/yosemite-landing.jpg')}
      >
        <Text style={styles.heading}>Spot Wildlife in the National Parks</Text>
        <StyledButton
          style={styles.button}
          title='Start Exploring'
          onPress={() => navigation.navigate('SignUp')}
        ></StyledButton>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 190,
    right: 0,
    left: 0,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 15,
  },
})
