import React, {Image, ListView, PropTypes, View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import {VIEWPORT} from '../../constants/appConstants'

const CategoryItem = (props) => {
  let handleCategorySelect = () => props.onCategorySelect(props.category.tag)
  return (
    <TouchableOpacity
      onPress={handleCategorySelect}
    >
      <Image
        source={{uri: props.category.coverImage}}
        style={styles.catImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.catTitle}>
            {props.category.tag}
          </Text>
        </View>
      </Image>
    </TouchableOpacity>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.object
}

const CategoryListing = (props) => {
  function _populateList (item, index) {
    return (
      <CategoryItem
        category={item}
        onCategorySelect={props.onCategorySelect}
      />
    )
  }
  return (
    <ListView
      dataSource={_getDataSource(props.data)}
      renderRow={_populateList}
      style={styles.container}
    />
  )
}

CategoryListing.propTypes = {
  data: PropTypes.array,
  onCategorySelect: PropTypes.func
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource (itemList) {
  return dataSource.cloneWithRows(itemList)
}

const styles = StyleSheet.create({
  container: {},
  overlay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  catImage: {
    width: VIEWPORT.width,
    height: 84
  },
  catTitle: {
    backgroundColor: 'transparent',
    color: 'white'
  }
})

export default CategoryListing
