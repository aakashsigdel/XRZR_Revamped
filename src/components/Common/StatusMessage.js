import React, {
  Modal,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  Component
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class StatusMessage extends Component {
  dismisModalAfterTimeout () {
    this.timeout = setTimeout(() => {
      if (this._called) {
        this._called = false
        clearTimeout(this.timeout)
        return
      }
      this.props.onExit()
      this._called = false
    }, 5000)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.visible) {
      this.dismisModalAfterTimeout()
    }
  }

  _onExit () {
    this._called = true
    this.props.onExit()
  }

  render (props = this.props) {
    return (
      <Modal
        animated
        visible={props.visible}
        transparent={props.transparent}
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this._onExit()}
            style={styles.areaExceptButton}
          >
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onExit()}
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
}

StatusMessage.defaultProps = {
  visible: true,
  transparent: true
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
  },
  areaExceptButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
})
