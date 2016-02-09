import React from 'react-native'
import Video from 'react-native-video'

const Player = (props) => {
  //var videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
  var videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
  return (
    <Video style = {{flex: props.flex}}
           source={{uri: 'https://r3---sn-oppb-3uhl.googlevideo.com/videoplayback?fexp=9408495%2C9416126%2C9417058%2C9418777%2C9420452%2C9422596%2C9423661%2C9423662%2C9425115%2C9425740%2C9426668%2C9426943%2C9427035%2C9427054%2C9427119%2C9428077%2C9428559&upn=sSbWzpQhhYM&itag=18&key=yt6&ip=43.245.85.29&mn=sn-oppb-3uhl&mm=31&signature=69F136318369E7565C06EA377093EF41F3125192.DAD161006E17CD925B7BEB2213FCC6B7E46B3155&ms=au&id=o-AGVmkezLZw6-4p-x23OQL6J3_874VRW5xuOIK-HTB3bA&mv=m&mt=1455001370&sver=3&dur=48.181&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&lmt=1454891877414470&source=youtube&initcwndbps=2387500&requiressl=yes&mime=video%2Fmp4&pl=23&ratebypass=yes&ipbits=0&expire=1455023056'}}
           resizeMode="contain"
           muted={true}
    />
  )
}

export default Player