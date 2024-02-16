import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import HeaderImage from '../components/HeaderImage'
import StyledText from '../components/StyledText'
import { mammals } from '../data/mammalData'
import StyledButton from '../components/StyledButton'

const Hunt = () => {
  return (
    <View style={styles.container}>
      <HeaderImage
        source={require('../assets/images/acadia-national-park.jpg')}
      />
      <StyledButton title='Mark complete' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Hunt
