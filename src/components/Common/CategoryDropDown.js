'use strict'

import React, {
  Component,
  Modal,
  PickerIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class CategoryDropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: props.selectedCategory
    }
  }

  _renderCategories (categories) {
    return Object.keys(categories).map((categoryKey, index) => {
      return (
        <PickerIOS.Item
          key={index}
          label={categories[categoryKey].tag}
          value={categories[categoryKey].tag}
          />
      )
    })
  }

  _handleOkPress () {
    this.props.onCategoryChange(this.state.category)
    this.props.toggleCategoryModal()
  }

  render () {
    console.log(this.props.categories, 'dropme')
    return (
      <Modal
        visible={this.props.isModalVisible}
        animated
        transparent={false}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {'Select A Category'}
            </Text>
          </View>
          <PickerIOS
            selectedValue={this.state.category}
            onValueChange={(category) => this.setState({ category })}
            itemStyle={{
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {this._renderCategories(this.props.categories)}
            {/* <PickerIOS.Item label='Yoga' value='Yoga' /> */}
            {/* <PickerIOS.Item label='TRX' value='TRX' /> */}
            {/* <PickerIOS.Item label='The Gym' value='The Gym' /> */}
          </PickerIOS>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this._handleOkPress.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {'Ok'}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  picker: {
  },
  titleContainer: {
    backgroundColor: '#DB00AE',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SFCompactText-Semibold'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB00AE',
    width: 100,
    height: 60,
    marginTop: 35,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SFCompactText-Semibold'
  }
})
