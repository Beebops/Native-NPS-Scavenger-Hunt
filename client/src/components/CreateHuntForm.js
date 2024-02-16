import { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import StyledButton from './StyledButton'
import { FormStyles } from './FormStyles'
import SelectListComponent from './SelectListComponent'
import MultipleSelectListComponent from './MultipleSelectListComponent'
import { nationalParks } from '../data/parkData'
import { mammals } from '../data/mammalData'
import { birds } from '../data/birdData'
import { reptiles } from '../data/reptileData'
import { amphibians } from '../data/amphibianData'
import { fish } from '../data/fishData'

const CreateHuntForm = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [selectedPark, setSelectedPark] = useState('')
  const [selectedMammals, setSelectedMammals] = useState([])
  const [selectedBirds, setSelectedBirds] = useState([])
  const [selectedReptiles, setSelectedReptiles] = useState([])
  const [selectedAmphibians, setSelectedAmphibians] = useState([])
  const [selectedFish, setSelectedFish] = useState([])

  const handleSubmit = () => {
    // send this data to server
    alert(
      JSON.stringify({
        title,
        selectedPark,
        selectedMammals,
        selectedBirds,
        selectedReptiles,
        selectedAmphibians,
        selectedFish,
      })
    )
    setTitle('')
    setSelectedPark('')
    setSelectedMammals([])
    setSelectedBirds([])
    setSelectedReptiles([])
    setSelectedAmphibians([])
    setSelectedFish([])
    navigation.navigate('Hunt', { huntTitle: title })
  }

  return (
    <View>
      <StyledText style={FormStyles.label}>Hunt title</StyledText>
      <TextInput
        placeholder='Add a title'
        value={title}
        onChangeText={setTitle}
        style={FormStyles.input}
      />
      <StyledText style={FormStyles.label}>Select a park</StyledText>
      <SelectListComponent
        data={nationalParks}
        setSelected={(val) => setSelectedPark(val)}
        // onSelect={() => console.log(selectedPark)}
      />
      <StyledText style={FormStyles.label}>Select mammals</StyledText>
      <MultipleSelectListComponent
        data={mammals}
        label='Mammals'
        setSelected={(val) => setSelectedMammals(val)}
        // onSelect={() => console.log(selectedMammals)}
      />
      <StyledText style={FormStyles.label}>Select birds</StyledText>
      <MultipleSelectListComponent
        data={birds}
        label='Birds'
        setSelected={(val) => setSelectedBirds(val)}
        // onSelect={() => console.log(selectedBirds)}
      />
      <StyledText style={FormStyles.label}>Select reptiles</StyledText>
      <MultipleSelectListComponent
        data={reptiles}
        label='Reptiles'
        setSelected={(val) => setSelectedReptiles(val)}
        // onSelect={() => console.log(selectedReptiles)}
      />
      <StyledText style={FormStyles.label}>Select amphibians</StyledText>
      <MultipleSelectListComponent
        data={amphibians}
        label='Amphibians'
        setSelected={(val) => setSelectedAmphibians(val)}
        // onSelect={() => console.log(selectedAmphibians)}
      />
      <StyledText style={FormStyles.label}>Select fish</StyledText>
      <MultipleSelectListComponent
        data={fish}
        label='Fish'
        setSelected={(val) => setSelectedFish(val)}
        // onSelect={() => console.log(selectedFish)}
      />
      <StyledButton
        onPress={handleSubmit}
        title='Create Hunt'
        style={styles.submitBtn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    marginBottom: 25,
  },
})

export default CreateHuntForm

// const createHuntData = () => {
//   return {
//     id: userId,
//     userId: 1,
//     parkId: selectedPark,
//     title: title,
//     species: [
//       ...selectedMammals,
//       ...selectedBirds,
//       ...selectedReptiles,
//       ...selectedAmphibians,
//       ...selectedFish,
//     ],
//     isComplete: false,
//     dateStarted: new Date(),
//     dateCompleted: null,
//   }
// }
