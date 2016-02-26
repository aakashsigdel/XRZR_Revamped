import React, {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Hr from '../Common/Hr'

const ExerciseItem = (props) => {
  let duration = props.item.duration + ((props.item.mode === 'loop') ? ' rep' : ' sec')

  let idText = (
    <Text style={[styles.text, styles.idText]}>
      {props.item.index + 1}
    </Text>)

  if (props.nowPlaying === props.item.id) {
    idText = (
      <Icon
        name='play'
        size={9}
        style={[styles.playIcon, styles.id, styles.idText]}
      />
    )
  }

  const onVideoSelect = () => props.onVideoSelect(props.item.id)
  const onMoreSelect = () => props.onNavigate('action', props.item)

  return (
    <View>
      <Hr />
      <View style={styles.container} >
        <TouchableOpacity
          onPress={onVideoSelect}
          style={styles.id}
        >
          {idText}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onVideoSelect}
          style={styles.title}
        >
          <Text style={styles.text}>{props.item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onVideoSelect}
          style={styles.duration}
        >
          <Text style={[styles.text, styles.durationText]}>{duration}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onMoreSelect}
          style={styles.options}
        >
          <Icon
            name='more'
            size={15}
            style={styles.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

ExerciseItem.propTypes = {
  item: PropTypes.object,
  nowPlaying: PropTypes.number,
  onNavigate: PropTypes.func,
  onVideoSelect: PropTypes.func

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42
  },
  text: {
    color: 'white',
    opacity: 0.7
  },
  idText: {
    textAlign: 'right',
    marginRight: 9
  },
  id: {
    flex: 1
  },
  title: {
    flex: 7.26
  },
  duration: {
    flex: 2.83
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
  }
})

export default ExerciseItem
