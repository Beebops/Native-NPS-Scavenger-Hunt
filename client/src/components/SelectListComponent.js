import { SelectList } from 'react-native-dropdown-select-list'

const SelectListComponent = ({ data, setSelected, onSelect }) => {
  return (
    <>
      <SelectList data={data} setSelected={setSelected} onSelect={onSelect} />
    </>
  )
}

export default SelectListComponent
