import { useState } from 'react'
import StyledText from '../components/StyledText'
import SelectListComponent from '../components/SelectListComponent'
import MultipleSelectListComponent from '../components/MultipleSelectListComponent'
import { nationalParks } from '../data/parkData'
import { mammals } from '../data/mammalData'
import { birds } from '../data/birdData'
import { reptiles } from '../data/reptileData'
import { amphibians } from '../data/amphibianData'
import { fish } from '../data/fishData'

const AddSpeciesForm = () => {
  //const [selectedPark, setSelectedPark] = useState('')
  const [selectedMammals, setSelectedMammals] = useState([])
  const [selectedBirds, setSelectedBirds] = useState([])

  return (
    <>
      <StyledText>Select a park</StyledText>
      <SelectListComponent data={nationalParks} />
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
    </>
  )
}

export default AddSpeciesForm
