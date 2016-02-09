import React, {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const PlayerController = (props) => {
  return (
    <View style={[{flex: props.flex}, styles.container]}>
      <View style={styles.controllers}>
        <Icon name='ios-rewind' size={30} style={styles.controllerIcon} />
        <View>
          <Text style={[styles.text, styles.counter]}>00:10</Text>
          <Text style={[styles.text]}>Sun Salutation A</Text>
        </View>
        <Icon name='ios-fastforward' size={30} style={styles.controllerIcon} />
      </View>
      <View style={styles.seeker}>
        <View style={styles.seenVideoLength}></View>
        <View style={styles.remainingVideoLength}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c404e'
  },
  controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controllerIcon: {
    color: 'white'
  },
  text: {
    color: 'white'
  },
  counter: {
    fontSize: 45
  },
  seeker: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,

  },
  seenVideoLength: {
    height: 5,
    flex: 3,
    backgroundColor: 'white'
  },
  remainingVideoLength: {
    height: 5,
    flex: 2,
    backgroundColor: 'black'
  }
})

export default PlayerController