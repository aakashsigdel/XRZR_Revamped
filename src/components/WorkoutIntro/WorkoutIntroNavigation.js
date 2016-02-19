import React, { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import Navigator from '../Navigation/Navigation'

const WorkoutIntroNavigation = (props) => {
  let leftIcon = {
    custom: <TouchableOpacity
      onPress={props.onBackButton}
    >
      <Icon
        backgroundColor='transparent'
        color='rgba(255,255,255,0.5)'
        name='android-arrow-back'
        size={35}
      />
    </TouchableOpacity>
  }

  let rightIcon = {
    custom: <View>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={props.onDownloadButton}>
          <Icon
            color='rgba(255,255,255,0.5)'
            name='ios-download-outline'
            size={30}
            style={[styles.icon, styles.download]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onLikePress(!props.workout.like)}>
          {
            props.workout.like
              ? <FIcon name='heart' size={25} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.heart]} />
              : <FIcon name='heart-o' size={25} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.heart]} />
          }
        </TouchableOpacity>
        <Icon name='android-more-vertical' size={30} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.more]} />
      </View>
    </View>
  }
  return (
    <Navigator left={leftIcon}
      mid={{}}
      right={rightIcon}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  rightIcons: {
    flexDirection: 'row'
  },
  icons: {
    paddingLeft: 15
  },
  download: {
    paddingBottom: 5
  },
  heart: {
    paddingTop: 3
  },
  more: {
    paddingTop: 2,
    paddingRight: 5
  }
})

export default WorkoutIntroNavigation
