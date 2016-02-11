'use strict'

import { Dimensions } from 'react-native'

export const VIEWPORT = Dimensions.get('window')

// height in iphone6 is 64 which is 9.59% of the iphone6 window height
export const HEADERBAR_HEIGHT = 0.0959 * VIEWPORT.height

// orientation constants
export const ORIENTATION = {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE'
}
