import React, { Image, View, StyleSheet } from 'react-native'
import WorkoutIntroNavigation from './WorkoutIntroNavigation'
import WorkoutDescription from './WorkoutDescription'
import ExerciseList from './ExerciseList'
import { VIEWPORT } from '../../constants/appConstants'

const WorkoutIntroIndex = (props) => {
  return (
    <Image
      style={styles.container}
      source={require('../../../assets/images/background.png')}
    >
      <WorkoutIntroNavigation
        onBackButton={props.onBackButton}
        onDownloadButton={props.onDownloadButton}
        onLikePress={props.onLikePress}
        workout={props.workout}
        handlePressOptions={props.handlePressOptions}
      />
      <View style={{flex: 1}}>
        <WorkoutDescription
          workout={props.workout}
          instructor={props.instructor}
          goToProfile={props.goToProfile}
        />
      </View>
      <View style={{flex: 1}}>
        <ExerciseList
          exercises={props.exercises}
          onStartWorkout={props.onStartWorkout}
          onExerciseSelect={props.onExerciseSelect}
        />
      </View>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: VIEWPORT.height
  }
})

export default WorkoutIntroIndex
