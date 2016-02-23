import React, { ListView, PropTypes } from 'react-native'

const ListWrapper = (props) => {
  return (
    <ListView
      dataSource={_getDataSource(props.data)}
      renderRow={props._populateList}
    />
  )
}
let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
function _getDataSource (itemList) {
  return dataSource.cloneWithRows(itemList)
}

ListWrapper.propTypes = {
  _populateList: PropTypes.func,
  data: PropTypes.array
}

export default ListWrapper
