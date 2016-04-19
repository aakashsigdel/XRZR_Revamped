import React, { Image, View, ScrollView, StyleSheet } from 'react-native'
import WorkoutIntroNavigation from './WorkoutIntroNavigation'
import WorkoutDescription from './WorkoutDescription'
import ExerciseList from './ExerciseList'
import { VIEWPORT } from '../../constants/appConstants'
import StartButton from './StartButton'
import StatusMessage from '../../components/Common/StatusMessage'

const WorkoutIntroIndex = (props) => {
  return (
    <View
      style={styles.container}
    >
      <WorkoutIntroNavigation
        onBackButton={props.onBackButton}
        onDownloadButton={props.onDownloadButton}
        onLikePress={props.onLikePress}
        workout={props.workout}
        handlePressOptions={props.handlePressOptions}
      />
      <ScrollView>
        <WorkoutDescription
          workout={props.workout}
          instructor={props.instructor}
          goToProfile={props.goToProfile}
        />
        <ExerciseList
          exercises={props.exercises}
          onStartWorkout={props.onStartWorkout}
          onExerciseSelect={props.onExerciseSelect}
          isLoading={props.isLoading}
        />
      </ScrollView>
      <StartButton
        onStartWorkout={props.onStartWorkout}
      />
      <StatusMessage
        onExit={props.dismissStatusModal}
        statusMessage={props.statusMessage}
        visible={props.statusModalVisibility}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: VIEWPORT.height,
    flex: 1
  }
})

export default WorkoutIntroIndex
