/*
 * props
 * =====
 * -left: {
 *  text, // text for left or undefined
 *  custom, // custom element for left or undefined
 *  style, // style for left or undefined
 *  onButtonClick, // callback to be called when button pressed
 * }
 * and so on or mid and right
 *
 * -backgroundColor: background color for the navigatior, if not given 'transparent' will be used
 * -height: height of the navigator, if not given propotional to 64 points in iphone6 will be used
 */
'use strict'

import React, {
  PropTypes,
  StyleSheet,
  View
} from 'react-native'

import NavigationElement from './NavigationElement'
import {
  HEADERBAR_HEIGHT,
  VIEWPORT
} from '../../constants/appConstants'

const Navigation = (props) => {
  const navComponents = [props.left, props.mid, props.right]
  return (
    <View style={[
      styles.container,
      props.backgroundColor && { backgroundColor: props.backgroundColor },
      props.height && { height: props.height },
      props.position && {position: props.position}
    ]}>
    {(
      () => {
        return navComponents.map((navComponent, index) => {
          return (
            <NavigationElement
              key={index}
              text={navComponent.text}
              custom={navComponent.custom}
              style={navComponent.style}
              onButtonClick={navComponent.onButtonClick}
            />
            )
        })
      })()}
    </View>
  )
}

// need to figure out how to right this one for complex objects
Navigation.propTypes = {
  left: PropTypes.shape({
    text: PropTypes.text,
    custom: PropTypes.element,
    style: PropTypes.object,
    onButtonClick: PropTypes.func
  }),
  mid: PropTypes.shape({
    text: PropTypes.text,
    custom: PropTypes.element,
    style: PropTypes.object,
    onButtonClick: PropTypes.func
  }),
  right: PropTypes.shape({
    text: PropTypes.text,
    custom: PropTypes.element,
    style: PropTypes.object,
    onButtonClick: PropTypes.func
  }),
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  position: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: HEADERBAR_HEIGHT,
    width: VIEWPORT.width,
    left: 0,
    right: 0,
    top: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
})

export default Navigation
