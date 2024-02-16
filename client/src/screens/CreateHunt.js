import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native'

import CreateHuntForm from '../components/CreateHuntForm'

const CreateHunt = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <CreateHuntForm navigation={navigation} />
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
