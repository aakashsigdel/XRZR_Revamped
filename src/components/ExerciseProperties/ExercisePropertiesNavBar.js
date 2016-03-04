import React, {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Navigation from '../Navigation/Navigation'

const ExercisePropertiesNavBar = (props) => {
  const leftItem = (
    <TouchableOpacity
      onPress={props.onCloseButton}
    >
      <Image
        source={require('../../../assets/images/back.png')}
        style={styles.backButton}
      />
    </TouchableOpacity>
  )

  const rightItem = (
    <TouchableOpacity
      onPress={props.onDeleteButton}
    >
      <Text style={styles.deleteText}>
        DELETE
      </Text>
    </TouchableOpacity>
  )
  return (
    <Navigation
      left={{custom: leftItem}}
      mid={{}}
      right={{custom: rightItem}}
    />
  )
}

ExercisePropertiesNavBar.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  closeButton: {
    paddingTop: 29
  },
  deleteText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    marginBottom: 10,
    paddingRight: 12

  },
  backButton: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginBottom: 10
  }
})

export default ExercisePropertiesNavBar
