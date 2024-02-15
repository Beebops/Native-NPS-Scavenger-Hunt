import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react'

const MultipleSelectListComponent = ({
  data,
  label,
  setSelected,
  onSelect,
}) => {
  // const [selected, setSelected] = useState([])
  return (
    <MultipleSelectList
      data={data}
      setSelected={setSelected}
      save='value'
      onSelect={onSelect}
      label={label}
    />
  )
}

export default MultipleSelectListComponent
