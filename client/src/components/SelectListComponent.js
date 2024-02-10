import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const SelectListComponent = ({ data }) => {
  const [selected, setSelected] = useState('')

  return (
    <SelectList
      data={data}
      setSelected={(val) => setSelected(val)}
      save='value'
    />
  )
}

export default SelectListComponent
