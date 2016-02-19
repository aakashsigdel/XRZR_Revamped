import React, {
  PropTypes,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import {TrendingItem} from './TrendingItem'
import { VIEWPORT } from '../../constants/appConstants'

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
  return (
    <View style={{width: VIEWPORT.width}}>
      <Text style={styles.header}>
        TRENDING WORKOUTS
      </Text>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.trendings}
      >
        {trendingItems}
      </ScrollView>
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
