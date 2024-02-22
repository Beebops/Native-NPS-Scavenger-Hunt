import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
  ScrollView,
} from 'react-native'
import LgCard from '../components/LgCard'
import StyledText from '../components/StyledText'

const Hunts = ({ navigation, numberOfHunts = 1 }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => navigation.navigate('Hunt')}>
        {({ pressed }) => (
          <View style={pressed ? styles.pressedCard : undefined}>
            <LgCard
              title='Hunt Title'
              iconName='binoculars'
              image={require('../assets/images/acadia-national-park.jpg')}
            />
          </View>
        )}
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  pressedCard: {
    opacity: 0.5,
  },
})

export default Hunts
