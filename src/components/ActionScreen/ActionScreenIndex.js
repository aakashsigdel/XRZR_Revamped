'use strict'

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ActionScreen extends Component {
  constructor(){
    super()
    this.rows = []
  }

  _renderHr () {
    return <View style={styles.hr}></View>
  }

  _populateRows() {
    this.props.actionElements
    .map((child, index) => {
      this.rows.push(
        <View
          key={index}
        >
          {this._renderHr()}
          <TouchableOpacity
            style={styles.row}
            onPress={() => { 
              try{
                this.props.links[index].action()
              } catch (e){
                this.props.navigator.pop()}
            }
            }>
            <View style={[styles.iconContainer, child.border && styles.iconBorder]}>
              {child.icon}
            </View>
            <Text style={styles.text}>{child.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  renderTitle () {
    <View style={styles.titleContainer}>
      <Image
        source={{uri: this.props.actionTitle.image}}
        style={styles.titleImage}
      />
      <View style={styles.titleDescriptionContainer}>
        <Text style={[styles.text, styles.headerText]}>
          {this.props.actionTitle.title}
        </Text>
        <Text style={styles.text, styles.subText}>
          {this.props.actionTitle.subText}
        </Text>
      </View>
    </View>
  }

  render() {
    this._populateRows();
    return(
      <Image
        source={require('../../../assets/images/background.png')}
        style={styles.superContainer}
      >
        <View style={styles.container}>
          {this.props.actionTitle ? this.renderTitle.bind(this) : null}
          {this.rows.map((row) => row)}
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.props.navigator.pop}
          style={styles.cancel}
        >
          <Text style={styles.cancelText}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  cancel: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B4E5E'
  },
  cancelText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Book',
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  iconBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  hr: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
    opacity: 0.5
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700',
    color: 'white'
  }
})
