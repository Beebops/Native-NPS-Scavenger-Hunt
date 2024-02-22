import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import CustomCheckbox from './CustomCheckbox'

const SpeciesListItem = ({
  commonName,
  scientificName,
  isFound,
  onFoundChange,
}) => {
  return (
    <View style={styles.speciesItem}>
      <CustomCheckbox
        style={styles.speciesCheckBox}
        isChecked={isFound}
        onCheckChange={onFoundChange}
      />
      <StyledText style={styles.speciesText}>{commonName}</StyledText>
      <StyledText style={[styles.speciesText, styles.scientificNameText]}>
        {' '}
        ({scientificName})
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  speciesItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A58E91',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  speciesText: {
    fontSize: 14,
  },
  scientificNameText: {
    fontStyle: 'italic',
    fontWeight: '200',
  },
})

export default SpeciesListItem
