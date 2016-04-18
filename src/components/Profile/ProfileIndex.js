'use strict'

import React, {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Cover from '../Common/Cover'
import Description from './Description'
import InstagramList from './InstagramList'
import WorkoutList from './WorkoutList'
import ProfileNavigation from './ProfileNavigation'
import { VIEWPORT } from '../../constants/appConstants'

const ProfileIndex = (props) => {
  return (
    <View
      style={{height: VIEWPORT.height, width: VIEWPORT.width}}
    >
      <ScrollView
      >
        <View style={styles.cover}>
          <Cover
            user={props.user}
            navigator={props.navigator}
          />
        </View>
        <View style={styles.description}>
          <Description
            user={props.user}
            navigator={props.navigator}
          />
        </View>
        <View style={styles.workout}>
          <WorkoutList
            user={props.user}
            workouts={props.workouts}
            goToWorkoutIntro={props.goToWorkoutIntro}
            navigator={props.navigator}
          />
        </View>
        <View style={styles.instagram}>
          <Text style={styles.titleText}>
            INSTAGRAM
          </Text>
          <InstagramList
            user={props.user}
            instagramPhotos={props.instagramPhotos}
            isFetchingInstagram={props.isFetchingInstagram}
            navigator={props.navigator}
          />
        </View>
        <ProfileNavigation
          user={props.user}
          handlePressOptions={props.handlePressOptions}
          navigator={props.navigator}
          currentUserId={props.currentUserId}
          rightIcon={props.rightIcon}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1
  },
  cover: {
    height: 251.5 * VIEWPORT.height / 667
  },
  description: {
    height: 94.5 * VIEWPORT.height / 667
  },
  workout: {
    height: 144.5 * VIEWPORT.height / 667
  },
  instagram: {
  },
  titleText: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    color: 'white',
    marginBottom: 7.5,
    marginLeft: 12
  }
})

export default ProfileIndex
