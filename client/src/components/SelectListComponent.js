import { SelectList } from 'react-native-dropdown-select-list'

const SelectListComponent = ({ data, setSelected, onSelect }) => {
  return (
    <>
      <SelectList
        data={data}
        setSelected={setSelected}
        onSelect={onSelect}
        boxStyles={{
          marginBottom: 8,
        }}
        notFoundText='No parks found'
      />
    </>
  )
}

export default SelectListComponent
