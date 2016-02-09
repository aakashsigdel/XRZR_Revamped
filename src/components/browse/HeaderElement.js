import React, {
  Image,
  View,
  Text,
  PropTypes,
  StyleSheet,
} from 'react-native'

export const HeaderElement = (props)=>{
  return (
  <View style={styles.container}>
    <Image style={styles.parentImage}
           source={{ uri: props.headerImage }} >

      <View style={styles.profileDesc}>
        <Image style={styles.roundImage}
               source={{ uri: props.headerImage }} />
        <View style={styles.textDesc} >
          <Text style={styles.titleText}>
            Gibbets are the jolly rogers of the misty riddle.
          </Text>
          <Text style={styles.descText}>
            How misty. You taste like a reef.
          </Text>
        </View>

      </View>


    </Image>
  </View>
  )
}

HeaderElement.propTypes = {
  headerImage: PropTypes.string.isRequired,
}


const styles = StyleSheet.create({
  container: {
    height: 210
  },
  parentImage: {
    height: 210
  },
  profileDesc: {
    marginTop: 168,
    marginLeft: 13,
    flexDirection: 'row'
  },
  roundImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
  },
  textDesc: {
    marginLeft: 12.5,
    backgroundColor: 'transparent',
  },
  titleText: {
    color: 'rgba(255, 255, 255, 0.8)'
  },
  descText: {
    color: 'white'
  }
})