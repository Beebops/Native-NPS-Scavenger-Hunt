import { SelectList } from 'react-native-dropdown-select-list'
import { nationalParks } from '../data/parkData'
import { useState } from 'react'

const SelectListComponent = ({ data, label, setSelected, onSelect }) => {
  // const [selected, setSelected] = useState('')

  return (
    <>
      <SelectList data={data} setSelected={setSelected} onSelect={onSelect} />
    </>
  )
}

export default SelectListComponent
