import React, {
  Image,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { VIEWPORT } from '../../constants/appConstants'

const WorkoutListItem = (props) => {
  const handleLoadWorkout = () => props.loadWorkout(props.item.id)

  const titleText = props.item.title.length > 40
    ? props.item.title.slice(0, 40) + '...'
    : props.item.title

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleLoadWorkout}
    >
      <Image
        source={{uri: props.item.image_16x9}}
        style={styles.rowContainer}
      >
        <View style={styles.overlay}>
          <View style={styles.imageAndDescWrapper}>
            <Image
              source={{uri: props.item.instructor.image}}
              style={styles.titleImage}
            />
            <View style={styles.description}>
              <Text style={styles.headerText}>
                {titleText.toUpperCase()}
              </Text>
              <Text style={ styles.text }>
                {props.item.duration + ' . ' + props.item.instructor.name}
              </Text>
            </View>
          </View>
          <Icon
            color='rgba(255, 255, 255, 0.6)'
            name='ios-arrow-right'
            size={20}
            style={styles.icon}
          />
        </View>
      </Image>
    </TouchableOpacity>
  )
}

WorkoutListItem.propTypes = {
  item: PropTypes.object,
  loadWorkout: PropTypes.func
}
const styles = StyleSheet.create({
  rowContainer: {
    height: 85,
    width: VIEWPORT.width
  },
  overlay: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  imageAndDescWrapper: {
    flex: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: 10
  },
  description: {
    marginLeft: 10
  },
  headerText: {
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    letterSpacing: 1
  },
  text: {
    opacity: 0.8,
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    letterSpacing: 1
  },
  icon: {
    flex: 1
  }
})

export default WorkoutListItem
