import React, { View, StyleSheet, PropTypes, Text } from 'react-native'
import ListWrapper from '../Common/ListWrapper'
import ExerciseListItem from './ExerciseListItem'

const ExerciseList = (props) => {
  const _populateList = (item, index) => (
    <ExerciseListItem
      editOnProgress={props.editOnProgress}
      onMoreButton={props.onMoreButton}
      onRemoveButton={props.onRemoveButton}
      item={item}
    />
  )
  return (
    <View>
      <Text style={styles.title}>
        FAVOURITE EXERCISES
      </Text>
      <ListWrapper
        _populateList={_populateList}
        data={props.data}
      />
    </View>
  )
}

ExerciseList.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  title: {
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,

    marginTop: 5,
    marginBottom: 13,
    marginLeft: 14
  }
})

export default ExerciseList
