import React, {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {TrendingItem} from './TrendingItem'

export const TrendingWorkouts = (props)=>{
  let trendingItems = props.trends.map(
    (trend, index)=><TrendingItem {...trend} key={index} />
  )
  return (
    <View>
      <Text style={styles.header}>
        TRENDING WORKOUTS
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.trendings}
        contentContainerStyle={styles.contentContainer}
      >

        {trendingItems}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 10,
  },
  header: {
    marginTop: 19,
    marginLeft: 14,
    //textTransform: 'capitalize',
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12
  },
  trendings: {
    marginBottom: 14.5,
  },
  contentContainer: {
    paddingRight: 50
  }
})