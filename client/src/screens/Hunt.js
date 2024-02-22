import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderImage from '../components/HeaderImage'
import StyledButton from '../components/StyledButton'
import HuntSpeciesList from '../components/HuntSpeciesList'
import { FormSubmitBtnStyles } from '../components/FormSubmitBtnStyles'
import { huntSpeciesData } from '../data/huntSpeciesData'

const Hunt = () => {
  const [speciesData, setSpeciesData] = useState(huntSpeciesData)
  const [allFound, setAllFound] = useState(false)

  // update the species data whenever checkbox is toggled
  useEffect(() => {
    setAllFound(checkForAllFound(speciesData))
  }, [speciesData])

  const checkForAllFound = (data) => data.every((species) => species.isFound)

  const toggleFoundState = (id) => {
    const newData = speciesData.map((item) => {
      if (item.id === id) {
        // toggle the isFound state of the selected species id
        return { ...item, isFound: !item.isFound }
      }

      return item
    })
    setSpeciesData(newData)
  }

  const handleSubmit = () => {
    console.log('sending data to database')
  }

  return (
    <View style={styles.container}>
      <HeaderImage
        source={require('../assets/images/acadia-national-park.jpg')}
      />
      <HuntSpeciesList
        speciesData={speciesData}
        checkForAllFound={checkForAllFound}
        toggleIsFound={toggleFoundState}
      />
      <StyledButton
        onPress={handleSubmit}
        title='Mark complete'
        style={styles.submitBtn}
        // disable if checkforallfound is false
      ></StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitBtn: {
    marginTop: 18,
    marginBottom: 25,
  },
})

export default Hunt
