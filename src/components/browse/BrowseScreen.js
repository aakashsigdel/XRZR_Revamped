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
        <Header featured={props.featured}/>
        <TrendingWorkouts trends={props.trendings} onWorkoutSelect={props.onWorkoutSelect} />
        <ListingMenu items={props.listingItems} />
        <Categories categories={props.categories} />
      </ScrollView>
    </Image>
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



export default BrowserScreen;