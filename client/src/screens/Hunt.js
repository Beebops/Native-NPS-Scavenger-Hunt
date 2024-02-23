import { useState, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListHeader from '../components/ListHeader'
import StyledButton from '../components/StyledButton'
import SpeciesListItem from '../components/SpeciesListItem'
import { huntSpeciesData } from '../data/huntSpeciesData'

const Hunt = () => {
  const [speciesData, setSpeciesData] = useState(huntSpeciesData)
  const [completionPercentage, setcompletionPercentage] = useState(0)
  const [animalsFound, setAnimalsFound] = useState(0)

  useEffect(() => {
    const totalSpecies = speciesData.length
    const foundSpecies = speciesData.filter((species) => species.isFound).length
    const newCompletionPercentage = (foundSpecies / totalSpecies) * 100
    setAnimalsFound(foundSpecies)
    setcompletionPercentage(newCompletionPercentage.toFixed(0))
  }, [speciesData])

  // toggles the isFound property of the selected species id
  const toggleFoundState = (id) => {
    const newData = speciesData.map((item) => {
      if (item.id === id) {
        return { ...item, isFound: !item.isFound }
      }

      return item
    })
    setSpeciesData(newData)
  }

  const handleSubmit = () => {
    console.log('marking hunt as complete in database')
  }

  return (
    <FlatList
      data={speciesData}
      renderItem={({ item }) => (
        <SpeciesListItem
          commonName={item.commonName}
          scientificName={item.scientificName}
          isFound={item.isFound}
          onFoundChange={() => toggleFoundState(item.id)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <ListHeader
          completionPercentage={completionPercentage}
          animalsFound={animalsFound}
        />
      }
      ListFooterComponent={
        <StyledButton
          style={styles.footer}
          onPress={handleSubmit}
          title={'Mark complete'}
          disabled={completionPercentage < 100}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 10,
  },
})

export default Hunt
