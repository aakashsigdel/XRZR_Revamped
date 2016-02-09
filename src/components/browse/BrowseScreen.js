import React, { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import {HeaderElement} from './HeaderElement'
import {TrendingWorkouts} from './Trendings'
import {ListingMenu} from './ListingMenu'
import {Categories} from './Categories'

const BrowserScreen = (props) => {
  return (
    <ScrollView style={ {flex:1} }>
      <View style={{ height: 64, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', color: 'white', marginTop:20 }}>
          Navigation Bar goes here.
        </Text>
      </View>
      <HeaderElement headerImage="http://i.imgur.com/ilAQEm3.gif" />
      <TrendingWorkouts trends={trends} />
      <ListingMenu items={items} />
      <Categories categories={categories} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  }
})

let categories = [{
  coverImage: 'http://i.imgur.com/38nCBJi.jpg',
  tag: 'Salty pestilences lead to the madness.'
},{
  coverImage: 'http://i.imgur.com/jZGJdfx.jpg',
  tag: 'Ah, yer not fearing me without a courage!'
}, {
  coverImage: 'http://i.imgur.com/eHDuAOE.jpg',
  tag: 'Treasure ho! taste to be endured.'
},{
  coverImage: 'http://i.imgur.com/Y9oEEPO.jpg',
  tag: 'Old, swashbuckling lads heavily fire an evil, fine tobacco.'
}
]

let trends = [{
  photoUrl: 'http://i.imgur.com/4XCU59a.jpg',
  title: 'Aww! Pieces o\'.'
},{
  photoUrl: 'http://i.imgur.com/I0Y8R1W.jpg',
  title: 'Wow, scurvy!'
},{
  photoUrl: 'http://i.imgur.com/I0Y8R1W.jpg',
  title: 'Wow, strength!'
},{
  photoUrl: 'http://i.imgur.com/I0Y8R1W.jpg',
  title: 'Wow, scngth!'
}
]

let items = [{
  icon: 'i',
  title: 'Most Popular Workouts'
},{
  icon: 'j',
  title: 'My Workouts'
}
]

export default BrowserScreen;