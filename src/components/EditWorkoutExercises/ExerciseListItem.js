import React, { View, StyleSheet, PropTypes, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Hr from '../Common/Hr'

const ExerciseListItem = (props) => {
  let deleteButton = null
  if (props.editOnProgress) {
    const onRemoveButton = () => props.onRemoveButton(props.item.id)
    deleteButton = (
      <TouchableOpacity onPress={onRemoveButton}>
        <Icon name='minus-circled' size={20} color='#fe3f7b' style={styles.deleteIcon}/>
      </TouchableOpacity>
    )
  } else if (props.index !== undefined) {
    deleteButton = <Text style={styles.indexCounter}>{props.index}</Text>
  }

  const duration = props.item.duration + ((props.item.mode === 'loop') ? ' reps' : ' sec')

  return (
    <View style={ styles.container }>
      <Hr />
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          {deleteButton}
          <TouchableOpacity>
            <Text style={styles.exerciseTitle}>{props.item.title}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.rightText}>
            {duration}
          </Text>
        </View>
      </View>
    </View>
  )
}

ExerciseListItem.propTypes = {
  editOnProgress: PropTypes.bool,
  item: PropTypes.object,
  onRemoveButton: PropTypes.func
}
const styles = StyleSheet.create({
  container: {
  },
  exerciseTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12,

    paddingTop: 12.5,
    paddingLeft: 10,
    paddingBottom: 14
  },
  itemContainer: {
    flexDirection: 'row'
  },
  moreIcon: {
    paddingTop: 15,
    alignItems: 'flex-end'
  },
  deleteIcon: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  textContainer: {
    flex: 11,
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 3
  },
  rightText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    textAlign: 'right',
    paddingTop: 12.5,
  },
  indexCounter: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    paddingTop: 12.5,
    paddingLeft: 5
  }
})

export default ExerciseListItem
