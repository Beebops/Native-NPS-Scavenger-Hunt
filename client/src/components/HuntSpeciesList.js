import { FlatList, View, StyleSheet } from 'react-native'
import SpeciesListItem from './SpeciesListItem'

const HuntSpeciesList = ({ speciesData, toggleIsFound }) => {
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
            onFoundChange={() => toggleIsFound(item.id)}
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
