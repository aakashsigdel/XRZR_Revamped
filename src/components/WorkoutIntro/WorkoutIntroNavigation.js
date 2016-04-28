import React, {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import Navigator from '../Navigation/Navigation'

const WorkoutIntroNavigation = (props) => {
  let leftIcon = {
    custom: <TouchableOpacity
      onPress={props.onBackButton}
    >
      <Image
        source={require('../../../assets/images/back.png')}
        style={{width: 22, height: 22, marginLeft: 8, marginBottom: 10}}
      />
    </TouchableOpacity>
  }

  let rightIcon = {
    custom: <View>
      <View style={styles.rightIcons}>
        {/* <TouchableOpacity onPress={props.onDownloadButton}> */}
        {/*   <Image */}
        {/*     source={require('../../../assets/images/download.png')} */}
        {/*     style={[styles.icon, styles.download]} */}
        {/*   /> */}
        {/* </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => props.onLikePress(!props.workout.like)}
        style={{marginRight: 15}}
      >
          {
            props.workout.like
              ? <FIcon name='heart' size={25} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.heart]} />
              : <FIcon name='heart-o' size={25} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.heart]} />
          }
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.handlePressOptions()}
          style={{flexDirection: 'row', marginTop: 3}}
        >
          {/* <Icon name='android-more-horizontal' size={30} color='rgba(255,255,255,0.5)' style={[styles.icons, styles.more]} /> */}
          <Text style={styles.dotText} >
            {'•'}
          </Text>
          <Text style={styles.dotText} >
            {'•'}
          </Text>
          <Text style={styles.dotText} >
            {'•'}
          </Text>
        </TouchableOpacity>
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
  dotText: {
    color: 'white',
    fontSize: 15,
    opacity: 0.7,
    paddingLeft: 2,
    paddingTop: 5,
    paddingBottom: 5
  },
  rightIcons: {
    flexDirection: 'row',
    marginBottom: 5
  },
  icons: {
    paddingLeft: 15
  },
  download: {
    width: 22,
    height: 22,
    marginTop: 5
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
