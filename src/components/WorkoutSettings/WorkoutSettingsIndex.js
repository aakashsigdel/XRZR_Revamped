import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import NavigationBar from './WSNavbar'
import WorkoutDetails from './WorkoutDetails'
import ActionButtons from './ActionButtons'

const WorkoutSettingsIndex = (props) => {
  return (
    <View style={ styles.container }>
      <NavigationBar
        onCloseButton={props.onCloseButton}
        title={props.workout.title}
      />
      <WorkoutDetails
        workout={props.workout}
      />
      <ActionButtons />
    </View>
  )
}

WorkoutSettingsIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)'
  }
})

export default WorkoutSettingsIndex
