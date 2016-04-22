import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'
import SortableListView from 'react-native-sortable-listview'

import ListWrapper from '../Common/ListWrapper'
import ExerciseListItem from './ExerciseListItem'
import EditExerciseListItem from './EditExerciseListItem'

class ExerciseList extends React.Component {
  constructor (props) {
    super(props)
    this.order = Object.keys(props.exercises)
  }
  render (props = this.props) {
    let indexCounter = 0

    let onSaveButton = () => props.onSaveButton(this.order)

    const _populateList = (item) => {
      indexCounter += 1
      if (props.editOnProgress) {
        return (<EditExerciseListItem
          index={indexCounter}
          item={item}
          onRemoveButton={props.onRemoveButton}
          onLongPress={this.props.onLongPress} onPressOut={this.props.onPressOut}
        />)
      }
      return (<ExerciseListItem
        index={indexCounter}
        item={item}
      />)
    }

    return (
      <View style={styles.container}>
        <View style={styles.listings}>
          <Text style={styles.header}>WORKOUT EXERCISES</Text>
          {
            (this.props.editOnProgress)
              ? <SortableListView
                  style={{flex: 1}}
                  renderRow={_populateList}
                  data={props.exercises}
                  order={this.order}
                  onRowMoved={e => {
                    this.order.splice(e.to, 0, this.order.splice(e.from, 1)[0])
                    this.forceUpdate();
                  }}
                />
              : <ListWrapper
                  _populateList={_populateList}
                  data={props.exercises}
                />
          }
        </View>
        <TouchableOpacity
          onPress={onSaveButton}
          style={styles.saveButton}
        >
          <Text style={styles.saveText}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ExerciseList.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  listings: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  },
  header: {
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    paddingBottom: 10

  },
  saveButton: {
    backgroundColor: 'rgb(213,10,177)',
    paddingTop: 25,
    paddingBottom: 20
  },
  saveText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 14
  }
})

export default ExerciseList
