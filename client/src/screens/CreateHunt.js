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
import { states } from '../data/stateData'
import { nationalParks } from '../data/parkData'

const CreateHunt = () => {
  const [selected, setSelected] = useState('')

  return (
    <ScrollView style={styles.container}>
      <StyledText>Select a state</StyledText>
      <SelectList
        data={states}
        setSelected={(val) => setSelected(val)}
        save='value'
      />
      <StyledText>Select a park</StyledText>
      <SelectList
        data={nationalParks}
        setSelected={(val) => setSelected(val)}
        save='value'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
})

export default CreateHunt
