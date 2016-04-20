import React, {
  View,
  Image,
  ScrollView,
  StyleSheet,
  PropTypes,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Hr from '../Common/Hr'
import {VIEWPORT} from '../../constants/appConstants'

const WorkoutDetails = (props) => {
  const poster = (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.noImagePoster, styles.poster]}
      onPress={props.onChoosePhoto}
    >
      <MaterialIcon
        color='white'
        name='image'
        size={40}
      />
      <Text style={styles.posterText}>
        Add Workout cover Image
      </Text>
    </TouchableOpacity>
  )
  const actualPoster = (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.poster}
      onPress={props.onChoosePhoto}
    >
      <Image
        source={{uri: props.coverImage}}
        style={styles.actualPoster}
      />
    </TouchableOpacity>
  )

  return (
    <View style={ styles.container }>
      {props.coverImage ? actualPoster : poster}
      <ScrollView>
        <Hr />
        <View style={[styles.rowItem]}>
          <Text style={[styles.rowText]}>WORKOUT SETS</Text>
          <TextInput
            defaultValue={'' + props.workout.workout_set}
            keyboardType='number-pad'
            onChangeText={props.onWorkoutSetChange}
            style={[styles.rowText, styles.inputBox]}
          />
        </View>
        <Hr/>
        <View style={[styles.rowItem]}>
          <Text style={[styles.rowText]}>PAUSE BETWEEN EXERCISES</Text>
          <View style={styles.pauseOption}>
            <TextInput
              defaultValue={'' + props.workout.pause_between_exercises}
              keyboardType='number-pad'
              onChangeText={props.onPBEChange}
              style={[styles.rowText, styles.inputBox]}
            />
            <Text style={styles.rowText}> sec</Text>
          </View>
        </View>
        <Hr/>
        <View style={[styles.rowItem]}>
          <Text style={[styles.rowText]}>CATEGORY</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={props.toggleCategoryModal}
            style={{width: 80, alignItems: 'flex-end'}}
          >
            <Text style={styles.rowText}>{props.category}</Text>
          </TouchableOpacity>
        </View>
        <Hr/>
        <View style={[styles.descItem]}>
          <Text style={[styles.rowText, styles.descTitle]}>DESCRIPTION</Text>
          <TextInput
            defaultValue={props.workout.description}
            multiline
            onChangeText={props.onDescriptionChange}
            style={[styles.rowText, styles.descInputBox]}
          />
        </View>
      </ScrollView>
    </View>
  )
}

WorkoutDetails.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12.5,
    marginRight: 12.5
  },
  noImagePoster: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  posterText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12
  },
  poster: {
    height: 211
  },
  actualPoster: {
    height: 211,
    width: VIEWPORT.width - 25
  },
  rowItem: {
    flexDirection: 'row',
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 18,
    paddingBottom: 22,
    justifyContent: 'space-between'
  },
  rowText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 13
  },
  pauseOption: {
    flexDirection: 'row'
  },
  inputBox: {
    height: 20,
    width: 80,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right'
  },
  descItem: {
    paddingTop: 18,
    paddingBottom: 22
  },
  descTitle: {
    paddingBottom: 13
  },
  descInputBox: {
    height: 60,
    width: VIEWPORT.width * 0.9,
    color: 'rgba(255,255,255,0.5)'
  }
})

export default WorkoutDetails
