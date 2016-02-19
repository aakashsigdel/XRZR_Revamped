import React, {
  Image,
  View,
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {VIEWPORT} from '../../constants/appConstants'

const ExerciseListingItem = (props) => {
  let onWorkoutPressed = () => props.onWorkoutSelect(props.item.id)

  return (
    <Image
      source={{uri: props.item.image_16x9}}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={onWorkoutPressed}
        style={styles.overlay}
      >
        <View style={styles.profileImage}>
          <Image
            source={{uri: props.item.instructor.image}}
            style={styles.circle}
          />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.exerciseTitle}>{props.item.title.toUpperCase()}</Text>
          <Text style={styles.exerciseDetails}>{props.item.duration} . {props.item.instructor.name}</Text>
        </View>
        <Icon
          color='white'
          name='ios-arrow-right'
          size={20}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Image>
  )
}

ExerciseListingItem.propTypes = {
  item: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    height: 84,
    width: VIEWPORT.width

  },
  overlay: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 84,
    width: VIEWPORT.width,
    alignItems: 'center'
  },
  profileImage: {
    paddingLeft: 10,
    paddingRight: 10
  },
  circle: {
    height: 35,
    width: 35,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'white'
  },
  textContent: {
    width: 0.8 * VIEWPORT.width
  },
  exerciseTitle: {
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12,
    paddingBottom: 5
  },
  exerciseDetails: {
    fontFamily: 'Avenir-Book',
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)'
  },
  icon: {
    right: 1
  }
})

export default ExerciseListingItem
