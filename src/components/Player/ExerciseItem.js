import React, {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Hr = (props) => <View style={ styles.hrStyle } />

const ExerciseItem = (props) => {
  let duration = props.item.duration + ((props.item.mode == "loop")?" rep":" sec")

  let idText = <Text style={[styles.text, styles.id]}>{props.item.index + 1}</Text>
  if (props.nowPlaying === props.item.id){
    idText =  <Icon name="play" size={9} style={ [styles.playIcon, styles.id] } />
  }

  return (
    <View>
      <Hr />
      <TouchableOpacity style={styles.container}
                        onPress={()=>props.onVideoSelect(props.item.id)} >
        {idText}

        <Text style={[styles.text, styles.title]}>{props.item.title}</Text>
        <Text style={[styles.text, styles.duration]}>{duration}</Text>
        <Icon name="more" size={15} style={[styles.text, styles.options]} />
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
  },
  text: {
    color: 'white',
    opacity: 0.7,
  },
  id: {
    flex: 1,
    textAlign: 'right',
    marginRight: 9,
  },
  title: {
    flex: 7.26
  },
  duration: {
    flex: 2.83,
    textAlign: 'right'
  },
  options: {
    flex: 1.38,
    marginLeft: 9
  },
  playIcon: {
    color: 'white'
  },
  hrStyle:{
    height:1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
})

export default ExerciseItem