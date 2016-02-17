'use strict'

import React from 'react-native';
import{
  Component,
  Image,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import CategoryListing from './CategoryListing'
import WorkoutListing from '../MostPopular/Listing'

import { VIEWPORT } from '../../constants/appConstants'
const styles = StyleSheet.create(require('./TabStyles.json'));

export default class TabView extends Component {
  constructor() {
    super()
    this.navigator = null;
    this.state = {
      submitText : '',
      activeView: 'category',
    };
    this.filterText = '';
  }

  _renderScene (route, navigator)  {
    this.navigator = navigator;
    switch(route.name) {
      case 'instructor':
        return <View />
      case 'workout':
        return <WorkoutListing mostPopularWorkout={this.props.workouts} />
      case 'category':
        return <CategoryListing
          data={this.props.categories}
          onCategorySelect={this.props.onCategorySelect} />
      default:
        return (
          <View />
        );
    }
  }

  _handlePress(name, index) {
    try{
      this.navigator.jumpTo({name: name})
    }catch(e){
      this.navigator.push({name: name, index: index});
    }
    this.setState({
      activeView: name,
      index: index,
    })
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={[styles.tabBar, {width: VIEWPORT.width}]}>
          <TouchableHighlight
            onPress={this._handlePress.bind(this, 'instructor', 0)}
          >
            {(() => {
              if (this.state.activeView == 'instructor')
                return <View style={styles.selected}>
                  <Text style={[styles.font, styles.active]}>INSTRUCTOR</Text>
                </View>
              else
                return <Text style={styles.font}>INSTRUCTOR</Text>
            })()}
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._handlePress.bind(this, 'workout', 1)}>
            {(() => {
              if (this.state.activeView == 'workout')
                return <View style={styles.selected} >
                  <Text style={[styles.font, styles.active]}>WORKOUT</Text>
                </View>
              else
                return <Text style={styles.font}>WORKOUT</Text>
            })()}
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this._handlePress.bind(this, 'category', 2)}>
            {(() => {
              if (this.state.activeView == 'category')
                return <View style={styles.selected}>
                    <Text style={[styles.font, styles.active]}>CATEGORY</Text>
                  </View>
              else
                return <Text style={styles.font}>CATEGORY</Text>
            })()}
          </TouchableHighlight>

        </View>

        <View style={styles.list}>
          <Navigator
            initialRoute={{name: 'category', index: 1}}
            style={{backgroundColor: 'transparent'}}
            renderScene={this._renderScene.bind(this)}
            configureScene={(route) => Navigator.SceneConfigs.FloatFromBottom}
          />
        </View>
      </View>
    );
  }
}
