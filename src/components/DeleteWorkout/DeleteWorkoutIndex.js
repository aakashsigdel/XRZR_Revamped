import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
TouchableOpacity
} from 'react-native'

const DeleteWorkoutIndex = (props) => {
  return (
    <View style={ styles.container }>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Are you sure you want to delete “{props.workout.title}” workout?
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={props.onDelete}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.onCancel}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

DeleteWorkoutIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  messageContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 175,
    justifyContent: 'center',

    marginTop: 64,
    marginLeft: 13,
    marginRight: 13
  },
  messageText: {
    color: 'white',
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 19,
    textAlign: 'center',
    padding: 30,
    paddingTop: 100,
    paddingBottom: 55
  },
  buttons: {
    flexDirection: 'row'
  },
  deleteButton: {
    flex: 1,
    backgroundColor: 'rgb(41, 40, 43)',
    paddingTop: 18,
    paddingBottom: 19
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'rgb(213, 10, 177)',
    paddingTop: 18,
    paddingBottom: 19
  },
  deleteText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'SFUIDisplay-Medium',
    textAlign: 'center'
  },
  cancelText: {
    color: 'white',
    fontFamily: 'SFUIDisplay-Medium',
    textAlign: 'center'
  }
})

export default DeleteWorkoutIndex
