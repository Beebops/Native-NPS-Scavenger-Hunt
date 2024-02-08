import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, View } from 'react-native'

import StyledText from '../components/StyledText'

const Hunts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText>This is the Hunts Screen</StyledText>
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

export default Hunts
