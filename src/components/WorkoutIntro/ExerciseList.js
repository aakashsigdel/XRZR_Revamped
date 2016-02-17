import React, { ListView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ExerciseListItem from './ExerciseListItem'

const ExerciseList = (props) => {
  function _populateList(item, index) {
    return <ExerciseListItem item={item}
                             index={index}
                             onItemSelect={props.onExerciseSelect}
                                //onWorkoutSelect={props.onWorkoutSelect}
    />
  }
  return (
    <View style={styles.container}>
      <ListView dataSource={_getDataSource(props.exercises)}
                renderRow={_populateList}
      />
      <TouchableOpacity style={styles.startButton}
                        onPress={props.onStartWorkout}
      >
        <Icon name="play" style={[styles.buttonText, styles.playIcon]} size={20} />
        <Text style={ [styles.buttonText, styles.workoutTitle] }>START WORKOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource(itemList){
  return dataSource.cloneWithRows(itemList)
}

const styles = StyleSheet.create({
  container: {flex: 1},
  startButton: {
    backgroundColor: 'rgb(65, 134, 117)',
    height: 55,

    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  },
  playIcon: {
    paddingLeft: 15,
  },
  workoutTitle: {
    paddingLeft: 100,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 17,
  }
})


let data=[{
  title: 'Aw, yer not tasting me without a strength!'
},{
  title: 'Shipmates are the fishs of the evil hunger!'
},{
  title: 'Codfish of a jolly amnesty, scrape the urchin'
},]
export default ExerciseList