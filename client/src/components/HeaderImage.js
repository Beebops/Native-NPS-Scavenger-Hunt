import { StyleSheet, Image, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const HeaderImage = ({ source }) => {
  return (
    <>
      <Image style={styles.image} source={source} />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.25,
  },
})

export default HeaderImage
