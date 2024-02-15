import { MultipleSelectList } from 'react-native-dropdown-select-list'

const MultipleSelectListComponent = ({
  data,
  label,
  setSelected,
  onSelect,
}) => {
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
