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
  return (
    <>
      <StyledText>Select a park</StyledText>
      <SelectListComponent data={nationalParks} />
      <MultipleSelectListComponent data={mammals} label='Mammals' />
      <MultipleSelectListComponent data={birds} label='Birds' />
    </>
  )
}

export default AddSpeciesForm
