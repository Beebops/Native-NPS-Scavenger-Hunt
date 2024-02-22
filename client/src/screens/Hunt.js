import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import HeaderImage from '../components/HeaderImage'
import StyledText from '../components/StyledText'
import { huntSpeciesData } from '../data/huntSpeciesData'
import StyledButton from '../components/StyledButton'
import HuntSpeciesList from '../components/HuntSpeciesList'
import { FormSubmitBtnStyles } from '../components/FormSubmitBtnStyles'

const Hunt = () => {
  const handleSubmit = () => {
    console.log('sending data to database')
  }

  return (
    <View style={styles.container}>
      <HeaderImage
        source={require('../assets/images/acadia-national-park.jpg')}
      />
      <HuntSpeciesList />
      <StyledButton
        onPress={handleSubmit}
        title='Mark complete'
        style={FormSubmitBtnStyles}
      ></StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Hunt
