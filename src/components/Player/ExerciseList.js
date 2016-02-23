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
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  _getDataSource(itemList){
    return this.state.dataSource.cloneWithRows(itemList)
  }

  _populateList(item, index){
    //console.log(index)
    return <ExerciseItem item={item}
                         onVideoSelect={this.props.onVideoSelect}
                         nowPlaying={this.props.nowPlaying}
                         onNavigate={this.props.onNavigate}
    />
  }

  render(){
    return (
      <ListView style={[styles.container, {flex: this.props.flex}]}
                dataSource={this._getDataSource(this.props.data)}
                renderRow={this._populateList.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});

export default ExerciseList
