import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'

const PropertyActionButtons = (props) => {
  if (props.isNewExercise) {
    return (
      <View style={ styles.container }>
        <TouchableOpacity
          onPress={props.onSaveButton}
          style={styles.saveButton}
        >
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={ styles.container }>
      <TouchableOpacity
        style={styles.editButton}
        onPress={props.onChooseVideo}
      >
        <Text style={styles.editText}>EDIT VIDEO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onSaveButton}
        style={styles.saveButton}
      >
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  )
}

PropertyActionButtons.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55
  },
  editButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButton: {
    backgroundColor: 'rgb(213, 10 ,177)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editText: {
    color: 'white'
  },
  saveText: {
    color: 'white'
  }
})

export default PropertyActionButtons
