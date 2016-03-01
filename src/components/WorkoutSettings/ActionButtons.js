import React, {
  View,
  StyleSheet,
  Text,
  PropTypes
} from 'react-native'

const ActionButtons = (props) => {
  return (
    <View style={ styles.container }>
      <View style={styles.editExercises}>
        <Text style={styles.buttonText}>
          EDIT EXERCISES
        </Text>
      </View>
      <View style={styles.saveWorkout}>
        <Text style={styles.buttonText}>
          SAVE
        </Text>
      </View>
    </View>
  )
}

ActionButtons.propTypes = {}
const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row'
  },
  editExercises: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveWorkout: {
    backgroundColor: 'rgb(213, 10, 177)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 13
  }

})

export default ActionButtons
