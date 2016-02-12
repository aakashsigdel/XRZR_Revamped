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
      source={{ uri: rowData.image_16x9 }}
      style={ styles.rowContainer }
    >
      <View style={styles.overlay}>
        <Image
          source={{ uri: rowData.instructor.image }}
          style={ styles.titleImage }
        />
        <View style={ styles.description }>
          <Text style={[ styles.text, styles.headerText ]}>
            {rowData.title}
            hello
          </Text>
          <Text style={ styles.text }>
            {rowData.duration + ' . ' + rowData.instructor.name}
          </Text>
        </View>
      </View>
    </Image>
  )
}

const Listing = props => {
  let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2
  })
  let dataSource = ds.cloneWithRows( props.mostPopularWorkout )
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
  },
  headerText: {
  }
})

export default Listing
