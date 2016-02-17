import React, { Image, ListView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { VIEWPORT } from '../../constants/appConstants'


const CategoryItem = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>props.onCategorySelect(props.category.tag)}
    >
      <Image
        style={styles.catImage}
        source={{ uri: props.category.coverImage }}>
        <View style={styles.overlay}>
          <Text style={styles.catTitle}>
            { props.category.tag }
          </Text>
        </View>
      </Image>
    </TouchableOpacity>
  )
}

const CategoryListing = (props) => {
  function _populateList(item, index){
    return <CategoryItem category={item}
                         onCategorySelect={props.onCategorySelect}
    />
  }
  return (
    <ListView style={ styles.container }
              dataSource={_getDataSource(props.data)}
              renderRow={_populateList}
    />
  )
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource(itemList){
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
  catImage:{
    width: VIEWPORT.width,
    height: 84,
  },
  catTitle: {
    backgroundColor: 'transparent',
    color: 'white',
  }
})

export default CategoryListing