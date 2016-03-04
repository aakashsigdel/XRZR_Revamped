import React, { View, StyleSheet, PropTypes, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Hr from '../Common/Hr'

const ExerciseListItem = (props) => {
  let deleteButton = null
  if (props.editOnProgress) {
    const onRemoveButton = () => props.onRemoveButton(props.item.id)
    deleteButton = (
      <TouchableOpacity onPress={onRemoveButton}>
        <Icon name='minus-circled' size={20} color='rgb(255,134,126)' style={styles.deleteIcon}/>
      </TouchableOpacity>
    )
  }

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
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.dotText} >
            {'•••'}
          </Text>
        </TouchableOpacity>
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
  dotText: {
    fontSize: 10,
    letterSpacing: 1,
    color: 'white',
    opacity: 0.7
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreIcon: {
    paddingTop: 15,
    alignItems: 'flex-end'
  },
  deleteIcon: {
    paddingTop: 10,
    paddingLeft: 14
  },
  textContainer: {
    flex: 11,
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 1
  }
})

export default ExerciseListItem
