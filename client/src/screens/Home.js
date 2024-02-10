import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from 'react-native'
import LgCard from '../components/LgCard'
import StyledText from '../components/StyledText'

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Hunts')}>
        {({ pressed }) => (
          <View style={pressed ? styles.pressedCard : undefined}>
            <LgCard
              title='Hunts'
              iconName={'binoculars'}
              image={require('../assets/images/landscape-arch.jpg')}
            />
          </View>
        )}
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Favorites')}>
        {({ pressed }) => (
          <View style={pressed ? styles.pressedCard : undefined}>
            <LgCard
              title='Favorites'
              iconName={'heart-o'}
              image={require('../assets/images/eared-grebe.jpg')}
            />
          </View>
        )}
      </Pressable>

      <Pressable onPress={() => navigation.navigate('PhotoGallery')}>
        {({ pressed }) => (
          <View style={pressed ? styles.pressedCard : undefined}>
            <LgCard
              title='Photo Gallery'
              iconName={'picture-o'}
              image={require('../assets/images/mountain-goat.jpg')}
            />
          </View>
        )}
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pressedCard: {
    opacity: 0.5,
  },
})

export default Home
