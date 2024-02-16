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
    navigation.navigate('Hunts')
  }

  return (
    <View>
      <StyledText>Hunt Title</StyledText>
      <TextInput
        placeholder='Add a title'
        value={title}
        onChangeText={setTitle}
        style={FormStyles.input}
      />
      <StyledText>Select a park</StyledText>
      <SelectListComponent
        data={nationalParks}
        setSelected={(val) => setSelectedPark(val)}
        onSelect={() => console.log(selectedPark)}
      />
      <MultipleSelectListComponent
        data={mammals}
        label='Mammals'
        setSelected={(val) => setSelectedMammals(val)}
        onSelect={() => console.log(selectedMammals)}
      />
      <MultipleSelectListComponent
        data={birds}
        label='Birds'
        setSelected={(val) => setSelectedBirds(val)}
        onSelect={() => console.log(selectedBirds)}
      />
      <MultipleSelectListComponent
        data={reptiles}
        label='Reptiles'
        setSelected={(val) => setSelectedReptiles(val)}
        onSelect={() => console.log(selectedReptiles)}
      />
      <MultipleSelectListComponent
        data={amphibians}
        label='Amphibians'
        setSelected={(val) => setSelectedAmphibians(val)}
        onSelect={() => console.log(selectedAmphibians)}
      />
      <MultipleSelectListComponent
        data={fish}
        label='Fish'
        setSelected={(val) => setSelectedFish(val)}
        onSelect={() => console.log(selectedFish)}
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
