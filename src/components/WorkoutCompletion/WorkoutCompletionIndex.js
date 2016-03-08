import React, {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import {VIEWPORT} from '../../constants/appConstants'

const WorkoutCompletionIndex = (props) => {
  const onLikeButton = () => props.onLikeButton(props.workout.id)
  return (
    <View
      style={ styles.container }
    >
      <TouchableOpacity
        onPress={props.onCloseButton}
        style={styles.closeButton}
      >
        <Icon
          color='rgba(255,255,255,0.5)'
          name='close'
          size={35}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={{uri: props.workout.image_16x9}}
          style={styles.coverImage}
        >
          <Image
            style={styles.star}
            source={require('../../../assets/images/star.png')}
          />
          <Text style={styles.congrat}>
            CONGRATULUATION
          </Text>
        </Image>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={props.onShareButton}
          style={styles.shareButton}
        >
          <Icon
            name='share'
            size={20}
            style={styles.shareIcon}
          />
          <Text style={styles.shareText}>
            Share Workout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onLikeButton}
          style={styles.likeButton}
        >
          <FIcon
            name='heart-o'
            size={20}
            style={styles.likeIcon}
          />
          <Text style={styles.likeText}>
            Like Workout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

WorkoutCompletionIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    flex: 1
  },
  congrat: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 26
  },
  star: {
    alignItems: 'center'
  },
  closeButton: {
    // position: 'absolute',
    paddingLeft: 13,
    paddingTop: 29
  },
  coverImage: {
    height: 196,
    marginLeft: 12.5,
    marginRight: 12.5,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 12.5,
    marginRight: 12.5

  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 19,
    paddingBottom: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  likeButton: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 19,
    paddingBottom: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(213,10,177)'
  },
  likeIcon: {
    color: 'white',
    paddingRight: 10
  },
  shareIcon: {
    color: 'rgba(255,255,255,0.5)',
    paddingRight: 10
  },
  shareText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'SFUIDisplay-Medium'
  },
  likeText: {
    color: 'white',
    fontFamily: 'SFUIDisplay-Medium'
  }
})

export default WorkoutCompletionIndex
