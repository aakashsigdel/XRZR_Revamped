'use strict'

import React, {
  ListView,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

const _renderRow = rowData => {
  return (
    <Image
      source={{ uri: rowData.workoutImage }}
      style={ styles.rowContainer }
    >
      <View style={styles.overlay}>
        <Image
          source={{ uri: rowData.image }}
          style={ styles.titleImage }
        />
        <View style={ styles.description }>
          <Text style={[ styles.text, styles.headerText ]}>
            {rowData.name}
          </Text>
          <Text style={ styles.text }>
            {rowData.duration + ' . ' + rowData.instructor}
          </Text>
        </View>
      </View>
    </Image>
  )
}

const Listing = props => {
  let data = [
    {
      instructor: 'Rachel Grey',
      name: 'Youga of your leg and hands',
      duration: '60 mins',
      workoutImage: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg',
      image: 'http://rs42.pbsrc.com/albums/e325/MemorieCBrown/Week%206%20Lighting%20and%20Portraiture/TIGERIMAGE_zpsd0ac996f.jpg~c200'
    },
    {
      instructor: 'Rachel Grey',
      name: 'Yin youga for heart opeaning',
      duration: '10 mins',
      workoutImage: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg',
      image: 'http://rs42.pbsrc.com/albums/e325/MemorieCBrown/Week%206%20Lighting%20and%20Portraiture/TIGERIMAGE_zpsd0ac996f.jpg~c200'
    },
    {
      instructor: 'Rachel Grey',
      name: 'Walla thereapy sequence',
      duration: '60 mins',
      workoutImage: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg',
      image: 'http://rs42.pbsrc.com/albums/e325/MemorieCBrown/Week%206%20Lighting%20and%20Portraiture/TIGERIMAGE_zpsd0ac996f.jpg~c200'
    }
  ]
  let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2
  })
  let dataSource = ds.cloneWithRows(data)
  return (
    <ListView
      dataSource={dataSource}
      renderRow={_renderRow}
    />
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    height: 85,
  },
  overlay: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  titleImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: 10
  },
  description: {
    marginLeft: 10
  },
  text: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12,
    color: 'white'
  }
})

export default Listing
