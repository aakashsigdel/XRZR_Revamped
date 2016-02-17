import React, { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import Navigator from '../Navigation/Navigation'

const WorkoutIntroNavigation = (props) => {
  let leftIcon = {
    custom: <TouchableOpacity
      onPress={ props.onBackButton }
    >
      <Icon
        name='android-arrow-back'
        size={35}
        color='white'
        backgroundColor='transparent'
      />
    </TouchableOpacity>
  }
  let rightIcon = {
    custom: <View>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={props.onDownloadButton}>
          <Icon name="ios-download-outline" size={30} color="white" style={styles.icons} />
        </TouchableOpacity>
        <FIcon name="heart-o" size={25} color="white" style={styles.icons} />
        <Icon name="android-more-vertical" size={25} color="white" style={styles.icons} />
      </View>
    </View>
  }
  return (
    <Navigator left={ leftIcon }
               right={ rightIcon }
               mid={{}}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  rightIcons: {
    flexDirection: 'row'
  },
  icons: {
    padding: 7
  }
})

export default WorkoutIntroNavigation