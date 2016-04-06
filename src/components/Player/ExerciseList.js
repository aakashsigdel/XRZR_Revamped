import React, {
  Component,
  ListView,
  StyleSheet,
  PropTypes
} from 'react-native'

import ExerciseItem from './ExerciseItem'

class ExerciseList extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1.nowPlaying !== r2.nowPlaying
    }})
    this.state = {
      dataSource: this.ds.cloneWithRows(props.data)
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.data)
    })
  }

  //_getDataSource (itemList) {
  //  return this.state.dataSource.cloneWithRows(itemList)
  //}

  _populateList (item, index) {
    return (
      <ExerciseItem
        item={item}
        nowPlaying={this.props.nowPlaying}
        onNavigate={this.props.onNavigate}
        onVideoSelect={this.props.onVideoSelect}
      />
    )
  }
  //componentWillUpdate (np, ns) {
  //  console.log(this.props)
  //  console.log(np)
  //
  //  console.log(this.state)
  //  console.log(ns)
  //}
  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._populateList.bind(this)}
        style={styles.container}
      />
    )
  }
}

ExerciseList.propTypes = {
  data: PropTypes.array,
  flex: PropTypes.number,
  nowPlaying: PropTypes.number,
  onNavigate: PropTypes.func,
  onVideoSelect: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 3.4,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})

export default ExerciseList
