import React, {
  Modal,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const StatusMessage = (props) => {
  return (
    <Modal
      animated
      visible={props.visible}
      transparent={props.transparent}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={props.onExit}
          style={styles.box}
        >
          <Icon
            color='white'
            name='ios-checkmark-empty'
            size={55}
            style={styles.icon}
          />
          <Text style={styles.statusText}>
            {props.statusMessage}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

StatusMessage.default = {
  visible: true,
}

StatusMessage.propTypes = {
  onExit: PropTypes.func,
  statusMessage: PropTypes.string,
  visible: PropTypes.bool,
  transparent: PropTypes.bool
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  box: {
    height: 55,
    backgroundColor: 'rgb(26, 172, 217)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 13,
    paddingLeft: 10
  },
  icon: {
    marginTop: 5
  }

})

export default StatusMessage
