import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const CustomCheckbox = ({ isChecked, onCheckChange }) => {
  return (
    <TouchableOpacity onPress={onCheckChange} style={styles.checkboxContainer}>
      {isChecked ? (
        <Image
          source={require('../assets/images/check.png')}
          style={styles.checkedImage}
        />
      ) : (
        <View style={styles.uncheckedCheckbox} />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#A58E91',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  uncheckedCheckbox: {
    width: 25,
    height: 25,
    borderRadius: 3,
  },
  checkedImage: {
    width: 8,
    height: 8,
  },
})

export default CustomCheckbox
