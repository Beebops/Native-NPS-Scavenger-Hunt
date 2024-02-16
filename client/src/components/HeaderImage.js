import { StyleSheet, Image } from 'react-native'
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
    maxHeight: '25%',
  },
})

export default HeaderImage
