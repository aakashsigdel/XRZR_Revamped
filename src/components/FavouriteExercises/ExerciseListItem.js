import React, { View, StyleSheet, PropTypes, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Hr from '../Common/Hr'

const ExerciseListItem = (props) => {
  return (
    <View style={ styles.container }>
      <Hr />
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.exerciseTitle}>{props.item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon
            color='rgba(255,255,255,0.5)'
            name='more'
            size={20}
            style={styles.moreIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

ExerciseListItem.propTypes = {}
const styles = StyleSheet.create({
  container: {
  },
  exerciseTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12,

    paddingTop: 12.5,
    paddingLeft: 15,
    paddingBottom: 14
  },
  itemContainer: {
    flexDirection: 'row'
  },
  moreIcon: {
    paddingTop: 15,
    alignItems: 'flex-end'
  },
  textContainer: {
    flex: 10
  },
  iconContainer: {
    flex: 2
  }
})

export default ExerciseListItem
