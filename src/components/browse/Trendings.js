import React, {
  PropTypes,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import {TrendingItem} from './TrendingItem'
import { VIEWPORT } from '../../constants/appConstants'
import LoadingSign from '../Common/LoadingSign'

export const TrendingWorkouts = (props) => {
  let trendingItems = props.trends.map(
    (trend, index) => (
      <TrendingItem
        {...trend}
        key={index}
        onWorkoutSelect={props.onWorkoutSelect}
      />
    )
  )

  let exercisesView = (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.trendings}
    >
      {trendingItems}
    </ScrollView>
  )

  if (props.isTrendingLoading) {
    exercisesView = <LoadingSign />
  }

  return (
    <View style={{width: VIEWPORT.width}}>
      <Text style={styles.header}>
        TRENDING WORKOUTS
      </Text>
      <View style={styles.listContainer}>
        {exercisesView}
      </View>
    </View>
  )
}

TrendingWorkouts.propTypes = {
  onWorkoutSelect: PropTypes.func,
  trends: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    height: 10
  },
  listContainer: {
      height: 125
  },
  header: {
    marginTop: 19,
    marginLeft: 14,
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12
  },
  trendings: {
    marginBottom: 14.5
  },
  contentContainer: {
    paddingRight: 5
  }
})
