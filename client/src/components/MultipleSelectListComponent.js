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
      boxStyles={{
        marginBottom: 8,
      }}
      badgeStyles={{ backgroundColor: '#832E00' }}
      notFoundText='Animal not found'
    />
  )
}

export default MultipleSelectListComponent
