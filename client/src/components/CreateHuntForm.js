import { useState } from 'react'
import * as Yup from 'yup'
import { TextInput, View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import StyledButton from './StyledButton'

import { FormStyles } from './FormStyles'
import SelectListComponent from './SelectListComponent'
import MultipleSelectListComponent from './MultipleSelectListComponent'
import { createHuntSchema } from '../validations/createHuntValidation'
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
  const [errors, setErrors] = useState({})

  const handleTitleChange = (text) => {
    setTitle(text)
    setErrors((prevErrors) => ({ ...prevErrors, title: '' }))
  }

  const handleSubmit = async () => {
    // validate form data
    try {
      const formData = {
        title,
        selectedPark,
        selectedMammals,
        selectedBirds,
        selectedReptiles,
        selectedAmphibians,
        selectedFish,
      }
      // validate fromData against the schema
      await createHuntSchema.validate(formData, { abortEarly: false })
      // if successful
      setErrors({})
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
      // reset the form
      setTitle('')
      setSelectedPark('')
      setSelectedMammals([])
      setSelectedBirds([])
      setSelectedReptiles([])
      setSelectedAmphibians([])
      setSelectedFish([])
      // navigate to the newly created hunt page
      navigation.navigate('Hunt', { huntTitle: title })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors = err.inner.reduce((acc, currentError) => {
          acc[currentError.path] = currentError.message
          return acc
        }, {})
        setErrors(newErrors)
      }
    }
  }

  return (
    <View>
      <StyledText style={FormStyles.label}>Hunt title</StyledText>
      <TextInput
        placeholder='Add a title'
        value={title}
        // onChangeText={setTitle}
        onChangeText={handleTitleChange}
        style={FormStyles.input}
      />
      {errors.title && (
        <StyledText style={FormStyles.error}>{errors.title}</StyledText>
      )}
      <StyledText style={FormStyles.label}>Select a park</StyledText>
      <SelectListComponent
        data={nationalParks}
        setSelected={(val) => setSelectedPark(val)}
      />
      <StyledText style={FormStyles.label}>Select mammals</StyledText>
      <MultipleSelectListComponent
        data={mammals}
        label='Mammals'
        setSelected={(val) => setSelectedMammals(val)}
      />
      <StyledText style={FormStyles.label}>Select birds</StyledText>
      <MultipleSelectListComponent
        data={birds}
        label='Birds'
        setSelected={(val) => setSelectedBirds(val)}
      />
      <StyledText style={FormStyles.label}>Select reptiles</StyledText>
      <MultipleSelectListComponent
        data={reptiles}
        label='Reptiles'
        setSelected={(val) => setSelectedReptiles(val)}
      />
      <StyledText style={FormStyles.label}>Select amphibians</StyledText>
      <MultipleSelectListComponent
        data={amphibians}
        label='Amphibians'
        setSelected={(val) => setSelectedAmphibians(val)}
      />
      <StyledText style={FormStyles.label}>Select fish</StyledText>
      <MultipleSelectListComponent
        data={fish}
        label='Fish'
        setSelected={(val) => setSelectedFish(val)}
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
    marginTop: 18,
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
