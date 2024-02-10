import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const LgCard = ({ title, iconName, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} resizeMode='cover' style={styles.image} />
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <FontAwesome name={iconName} size={20} color='white' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 150,
    marginBottom: 12,
  },
  cardTitleWrapper: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#832E00',
  },
  image: {
    width: '100%',
    maxHeight: 120,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
  },
})

export default LgCard
