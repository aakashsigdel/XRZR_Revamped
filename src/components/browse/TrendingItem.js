import React, {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

export const TrendingItem = (props)=>{
  let titleText = props.title.length > 30? props.title.slice(0,30)+'...':props.title
  return (
    <TouchableOpacity style={styles.container}
                      onPress={()=>props.onWorkoutSelect(props.id)}
    >
      <Image
        style={styles.imageElement}
        source={{uri:props.image_16x9}}
      />
      <Text style={styles.textElement}>
        {titleText}
      </Text>
    </TouchableOpacity>)
}

let styles = StyleSheet.create({
  container: {
    marginLeft: 7,
  },
  imageElement: {
    width: 150,
    height: 84,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  textElement: {
    marginTop: 5,
    marginLeft: 5,
    width: 150,
    overflow: 'hidden',
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 10,
    color: 'white',
  }
})