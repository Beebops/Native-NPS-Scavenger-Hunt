import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderImage from '../components/HeaderImage'
import StyledButton from '../components/StyledButton'
import HuntSpeciesList from '../components/HuntSpeciesList'
import { huntSpeciesData } from '../data/huntSpeciesData'
import HuntIcon from '../components/HuntIcon'

const Hunt = () => {
  const [speciesData, setSpeciesData] = useState(huntSpeciesData)
  const [allFound, setAllFound] = useState(false)

  useEffect(() => {
    const areAllFound = speciesData.every((species) => species.isFound)
    setAllFound(areAllFound)
  }, [speciesData])

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
      <View style={styles.iconsContainer}>
        <HuntIcon text={'Percent'} iconName={'medal'} />
        <HuntIcon text={'Started on:'} iconName={'medal'} />
        <HuntIcon text={'5 animals to find'} iconName={'medal'} />
        <HuntIcon text={'Photos'} iconName={'medal'} />
      </View>
      <HuntSpeciesList
        speciesData={speciesData}
        toggleIsFound={toggleFoundState}
      />
      <StyledButton
        onPress={handleSubmit}
        title='Mark complete'
        style={styles.submitBtn}
        disabled={!allFound}
      ></StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  submitBtn: {
    marginTop: 18,
    marginBottom: 25,
  },
})

export default Hunt
