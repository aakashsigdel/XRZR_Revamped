'use strict'

import user from './user'

const instructor = (state = user(), action) => {
  return Object.keys(state)
    .filter((user) => state[user].isInstructor)
    .map((instructorKey, index) => state[instructorKey])
    .reduce((prevVal, currentVal, index) => {
      prevVal[index] = currentVal
      return prevVal
    }, {})
}

export default instructor
