import React, { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import Header from './Header'
import {TrendingWorkouts} from './Trendings'
import {ListingMenu} from './ListingMenu'
import {Categories} from './Categories'
import BrowserNavigationBar from './BrowseNavigationBar'

const BrowserScreen = (props) => {
  return (
    <Image source={require("../../../assets/images/background.png")} style={ {flex:1} }>
      <BrowserNavigationBar />
      <ScrollView>
        <Header featured={props.featured} onWorkoutSelect={props.onWorkoutSelect} />
        <TrendingWorkouts trends={props.trendings} onWorkoutSelect={props.onWorkoutSelect} />
        <ListingMenu items={props.listingItems} />
        <Categories categories={props.categories} />
      </ScrollView>
    </Image>
  )
}

export default BrowserScreen;