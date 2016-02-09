import React, {
  Component,
  ListView,
  View,
  StyleSheet,
} from 'react-native'

import ExerciseItem from './ExerciseItem'

class ExerciseList extends Component {
  constructor(props){
    super(props)
    this.state ={
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  _getDataSource(itemList){
    return this.state.dataSource.cloneWithRows(itemList)
  }

  _populateList(item){
    return <ExerciseItem item={item}/>
  }

  render(){
    return (
      <ListView style={[styles.container, {flex: this.props.flex}]}
                dataSource={this._getDataSource(data)}
                renderRow={this._populateList.bind(this)}
      />
    )
  }
}

const data = [
  {id: 1, title: 'Sun salutation A', time:'90 sec'},
  {id: 2, title: 'Sun salutation B', time:'20 sec'},
  {id: 3, title: 'How gutless.', time:'50 sec'},
  {id: 4, title: 'Horror, life, and faith.', time:'50 sec'},
  {id: 5, title: 'Never break a seashell.', time:'50 sec'},
  {id: 5, title: 'Never break a seashell.', time:'50 sec'},
  {id: 5, title: 'Never break a seashell.', time:'50 sec'},
  {id: 5, title: 'Never break a seashell.', time:'50 sec'},
  {id: 5, title: 'Never break a seashell.', time:'50 sec'},
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});

export default ExerciseList