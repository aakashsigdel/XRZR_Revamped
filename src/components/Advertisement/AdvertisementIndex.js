import React, {
  Image,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const AdvertisementIndex = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'http://aakashsigdel.github.io/XRZR_Files/others/ad.png'}}
        style={styles.adImage}
      />
      <View style={styles.tagLine}>
        <View style={styles.textContainer}>
        <Text style={styles.tagText}>
          BUY HUMMEL SHOES IN STORE
        </Text>
          </View>
        <TouchableOpacity
          onPress={props.onClose}
          style={styles.closeButton}
        >
          <Icon
            color='white'
            name='ios-close-empty'
            size={48}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

AdvertisementIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  adImage: {
    flex: 11.2
  },
  tagLine: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 5.81,
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 13
  },
  closeButton: {
    flex: 1,
    backgroundColor: 'rgb(213, 10, 177)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AdvertisementIndex
