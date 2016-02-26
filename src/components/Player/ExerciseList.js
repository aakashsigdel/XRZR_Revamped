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
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  _getDataSource (itemList) {
    return this.state.dataSource.cloneWithRows(itemList)
  }

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

  render () {
    return (
      <ListView
        dataSource={this._getDataSource(this.props.data)}
        renderRow={this._populateList.bind(this)}
        style={[styles.container, {flex: this.props.flex}]}
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
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})

export default ExerciseList
