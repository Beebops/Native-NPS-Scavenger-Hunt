import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Button,
} from 'react-native'

import StyledText from '../components/StyledText'

const PhotoGallery = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText>You have no photos yet</StyledText>
      <Button title='Go to home' onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PhotoGallery
