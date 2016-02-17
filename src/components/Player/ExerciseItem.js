import React, {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

const Hr = (props) => <View style={ styles.hrStyle } />

const ExerciseItem = (props) => {
  let duration = props.item.duration + ((props.item.mode == "loop")?" rep":" sec")

  let idText = <Text style={[styles.text, styles.idText]}>{props.item.index + 1}</Text>
  if (props.nowPlaying === props.item.id){
    idText =  <Icon name="play" size={9} style={ [styles.playIcon, styles.id, styles.idText] } />
  }

  return (
    <View>
      <Hr />
      <View style={styles.container} >
        <TouchableOpacity style={styles.id}
          onPress={()=>props.onVideoSelect(props.item.id)}
        >
          {idText}
        </TouchableOpacity>
        <TouchableOpacity style={styles.title}
          onPress={()=>props.onVideoSelect(props.item.id)} >
          <Text style={styles.text}>{props.item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.duration}
          onPress={()=>props.onVideoSelect(props.item.id)}
        >
          <Text style={[styles.text, styles.durationText]}>{duration}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}
          onPress={_ => props.onNavigate('action', props.item)}
        >
          <Icon name="more" size={15} style={styles.text} />
        </TouchableOpacity>
      </View>
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
  idText: {
    textAlign: 'right',
    marginRight: 9,
  },
  id: {
    flex: 1,
  },
  title: {
    flex: 7.26
  },
  duration: {
    flex: 2.83,
  },
  durationText: {
    textAlign: 'right'
  },
  options: {
    flex: 1,
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
