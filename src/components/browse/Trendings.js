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
        style={styles.trendings}>

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
    opacity: 0.6,
    color: 'black',
  },
  trendings: {
    flexDirection: 'row',
    marginBottom: 14.5,
  }
})