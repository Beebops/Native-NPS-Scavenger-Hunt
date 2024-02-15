import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react'

const MultipleSelectListComponent = ({ data, label }) => {
  const [selected, setSelected] = useState([])
  return (
    <MultipleSelectList
      data={data}
      setSelected={(val) => setSelected(val)}
      save='value'
      onSelect={() => console.log(selected)}
      label={label}
    />
  )
}

export default MultipleSelectListComponent
