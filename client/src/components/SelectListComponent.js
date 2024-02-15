import { SelectList } from 'react-native-dropdown-select-list'
import { nationalParks } from '../data/parkData'
import { useState } from 'react'

const SelectListComponent = ({ data, label }) => {
  const [selected, setSelected] = useState('')

  return (
    <>
      <SelectList
        data={nationalParks}
        label={'Parks'}
        setSelected={(val) => setSelected(val)}
        onSelect={() => console.log(selected)}
      />
    </>
  )
}

export default SelectListComponent
