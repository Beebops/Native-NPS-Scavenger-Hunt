import { useState } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'
import SpeciesListItem from './SpeciesListItem'
import StyledButton from './StyledButton'
import { huntSpeciesData } from '../data/huntSpeciesData'

const HuntSpeciesList = () => {
  const [speciesData, setSpeciesData] = useState(huntSpeciesData)
  const [isActive, setIsActive] = useState(false)
  const [allChecked, setAllChecked] = useState(false)

  const toggleButtonActiveState = () => {
    setIsActive(!isActive)
  }

  const checkIfAllChecked = () => {
    // if item.isFound returns true for allspeciesData enable submit button
    toggleButtonActiveState()
  }

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

  return (
    <View style={styles.container}>
      <FlatList
        data={speciesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SpeciesListItem
            style={styles.speciesItem}
            commonName={item.commonName}
            scientificName={item.scientificName}
            isFound={item.isFound}
            onFoundChange={() => toggleFoundState(item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default HuntSpeciesList
