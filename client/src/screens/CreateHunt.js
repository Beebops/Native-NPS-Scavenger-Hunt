import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native'

import AddSpeciesForm from '../components/CreateHuntForm'

const CreateHunt = () => {
  return (
    <ScrollView style={styles.container}>
      <AddSpeciesForm />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  selectText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

export default CreateHunt
