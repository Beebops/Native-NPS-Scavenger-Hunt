import * as Yup from 'yup'

export const createHuntSchema = Yup.object()
  .shape({
    title: Yup.string()
      .max(75, 'Title must be 75 characters or less')
      .required('A title is required'),
    selectedPark: Yup.string().required('A park must be selected'),
    selectedMammals: Yup.array().of(Yup.string()),
    selectedBirds: Yup.array().of(Yup.string()),
    selectedReptiles: Yup.array().of(Yup.string()),
    selectedAmphibians: Yup.array().of(Yup.string()),
    selectedFish: Yup.array().of(Yup.string()),
  })
  .test('atLeastOneAnimal', 'You must select at least one animal', (value) => {
    const {
      selectedMammals,
      selectedBirds,
      selectedReptiles,
      selectedAmphibians,
      selectedFish,
    } = value
    // check if at least one of these arrays has at least one animal
    return (
      selectedMammals.length > 0 ||
      selectedBirds.length > 0 ||
      selectedReptiles.length > 0 ||
      selectedAmphibians.length > 0 ||
      selectedFish.length > 0
    )
  })
