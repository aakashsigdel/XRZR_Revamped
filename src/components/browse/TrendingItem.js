import React, {
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native'

export const TrendingItem = (props)=>{
  return (
    <View style={styles.container} >
      <Image
        style={styles.imageElement}
        source={{uri:props.photoUrl}}
      />
      <Text style={styles.textElement}>
        {props.title}
      </Text>
    </View>)
}

let styles = StyleSheet.create({
  container: {
    marginLeft: 7,
  },
  imageElement: {
    width: 150,
    height: 84,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  textElement: {
    marginTop: 5,
    marginLeft: 5,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 10,
    color: 'white',
  }
})