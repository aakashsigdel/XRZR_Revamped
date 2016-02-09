import React, {
  Component,
  Image,
  View,
  StyleSheet,
} from 'react-native'
import Video from 'react-native-video'

import { VIEWPORT } from '../../constants/appConstants'

import Player from './Player'
import ExerciseList from './ExerciseList'
import PlayerController from './PlayerController'

//const VideoScreen = (props) => {
  class VideoScreen extends Component {
    render() {
      return (
        <Image source={require("../../../assets/images/background.png")}
               style={styles.container}>
          <Player flex={2.2222}/>
          <ExerciseList flex={3.836}/>
          <PlayerController flex={1}/>
        </Image>
      )
    }
  }

const styles = StyleSheet.create({
  container:{
    width: VIEWPORT.width,
    height: VIEWPORT.height
  },
  videoContainer: {
    flex: 2.22222,
  },
  listView: {
    flex: 3.836,
  },
  playerControl: {
    flex: 1,
  }
})

export default VideoScreen