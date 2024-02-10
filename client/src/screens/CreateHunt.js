import { useState } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import StyledText from '../components/StyledText'
import SelectListComponent from '../components/SelectListComponent'
import { states } from '../data/stateData'
import { nationalParks } from '../data/parkData'

const CreateHunt = () => {
  const [selected, setSelected] = useState('')
  console.log(states)
  console.log(nationalParks)
  return (
    <ScrollView style={styles.container}>
      <StyledText style={styles.selectText}>Select a state</StyledText>
      <SelectListComponent data={states} />
      {/* <SelectList
        data={states}
        setSelected={(val) => setSelected(val)}
        save='value'
      /> */}
      <StyledText style={styles.selectText}>Select a park</StyledText>
      <SelectListComponent data={nationalParks} />
      {/* <SelectList
        data={nationalParks}
        setSelected={(val) => setSelected(val)}
        save='value'
      /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  selectText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

export default CreateHunt
