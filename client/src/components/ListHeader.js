import { View, Text, StyleSheet } from 'react-native'
import HeaderImage from './HeaderImage'

const ListHeader = ({ completionPercentage, animalsFound }) => {
  return (
    <View style={styles.container}>
      <HeaderImage
        source={require('../assets/images/acadia-national-park.jpg')}
      />
      <View style={styles.iconsContainer}>
        <View style={styles.wrapper}>
          <Text style={[styles.iconsText, styles.dynamicText]}>
            {animalsFound}
          </Text>
          <Text style={styles.iconsText}>Species found</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.iconsText, styles.dynamicText]}>
            {completionPercentage}
          </Text>
          <Text style={styles.iconsText}>complete</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.iconsText, styles.dynamicText]}>10/10/24</Text>
          <Text style={styles.iconsText}>Start date</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: '#A58E91',
    borderBottomWidth: 1,
    width: '90%',
    justifyContent: 'center',
    marginBottom: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 18,
    paddingHorizontal: 20,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconsText: {
    color: '#A58E91',
  },
  dynamicText: {
    fontWeight: 'bold',
  },
})

export default ListHeader
