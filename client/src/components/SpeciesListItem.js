import { View, StyleSheet, Pressable } from 'react-native'
import StyledText from './StyledText'
import CustomCheckbox from './CustomCheckbox'
import { FontAwesome6 } from '@expo/vector-icons'

const SpeciesListItem = ({
  commonName,
  scientificName,
  isFound,
  onFoundChange,
  navigation,
}) => {
  return (
    <View style={styles.speciesItem}>
      <View style={styles.speciesWrapper}>
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
      <Pressable
        onPress={() =>
          navigation.navigate('SpeciesDetail', { speciesName: 'Species Facts' })
        }
      >
        {() => <FontAwesome6 name='circle-info' size={18} color='#7EA320' />}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  speciesItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#A58E91',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  speciesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
