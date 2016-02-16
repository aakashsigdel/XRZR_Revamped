import React, { Image, View, StyleSheet, Text } from 'react-native'
import WorkoutIntroNavigation from './WorkoutIntroNavigation'
import WorkoutDescription from './WorkoutDescription'
import ExerciseList from './ExerciseList'
import { VIEWPORT } from '../../constants/appConstants'

import Icon from 'react-native-vector-icons/FontAwesome'


const WorkoutIntroIndex = (props) => {
  return (
    <Image style={ styles.container }
           source={require('../../../assets/images/background.png')}
    >
      <WorkoutIntroNavigation />
      <View style={{flex:1}}>
        <WorkoutDescription />
      </View>
      <View style={{flex:1}}>
        <ExerciseList />
      </View>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: VIEWPORT.height
  }
})

export default WorkoutIntroIndex