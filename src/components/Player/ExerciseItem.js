import React, {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Hr = (props) => <View style={{height:1, backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />

const ExerciseItem = (props) => {
  return (
    <View>
      <Hr />
      <View style={styles.container}>
        <Text style={[styles.text, styles.id]}>{props.item.id}</Text>
        <Text style={[styles.text, styles.title]}>{props.item.title}</Text>
        <Text style={[styles.text, styles.duration]}>{props.item.time}</Text>
        <Icon name="more" size={15} style={[styles.text, styles.options]}></Icon>
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
  }
})

export default ExerciseItem