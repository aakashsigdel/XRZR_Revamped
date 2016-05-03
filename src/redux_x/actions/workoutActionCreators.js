import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_LOCAL,
  POPULATE_WORKOUT,
  DELETE_WORKOUT,
  POST_WORKOUT,
  LIKE_WORKOUT,
  POPULATE_WORKOUT_EXERCISES,
  WORKOUT_STATUS_MODAL,
  FETCH_WORKOUT,
  PUBLISH_WORKOUT,
  PUBLISH_WORKOUT_LOCAL,
  UPDATE_WORKOUT_EXERCISES,
  UPDATE_WORKOUT_EXERCISES_LOCAL
} from './actionTypes'

import {
  BASE_URL,
  WORKOUT_LIKE_URL_FUNC,
  WORKOUT_VIEW_URL_FUNC,
  FAVOURITE_URL_FUNC,
  WORKOUT_EXERCISES_URL
} from '../../constants/appConstants'

import { loadWorkout } from './videoActionCreators'
import { getAccessTokenFromAsyncStorage } from '../../utilities/utility'
import { hydrateWorkout } from '../ApiUtilities.js'

import {WORKOUT_URL_FUNC} from '../../constants/appConstants'
import UrlBuilder from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'

import * as CategoryActions from './categoryActionCreators'
import * as UserActions from './userActionCreators'

export const addWorkout = (workout) => {
  return {
    type: ADD_WORKOUT,
    workout
  }
}

export const postWorkoutStart = () => {
  return {
    type: POST_WORKOUT,
    status: 'fetch'
  }
}

export const postWorkoutEnd = (workout) => {
  return {
    type: POST_WORKOUT,
    status: 'success'
  }
}

export const postWorkoutFailure = (errorMessage) => {
  return {
    type: POST_WORKOUT,
    status: 'error',
    errorMessage
  }
}

const defaultWorkoutOptions = {
  published: false,
  duration: '10 minutes',
  pause_interval: 10,
  description: 'Go To Settings To Add Description'
}
export const postWorkout = (title) => {
  return (dispatch, getState) => {
    dispatch(postWorkoutStart())
    const POST_WORKOUT_URL = BASE_URL + '/workout'
    const data = {
      title,
      ...defaultWorkoutOptions
    }

    getAccessTokenFromAsyncStorage()
    .then((result) => {
      fetch(
        POST_WORKOUT_URL,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access-token': getState().login.access_token
          },
          body: JSON.stringify(data)
        }
      )
      .then((response) => response.json())
      .then((responseData) => {
        const workout = {
          id: responseData.entities[0].id,
          title,
          instructor: responseData.entities[0].created_by.split('/')[1]
        }
        dispatch(addWorkout(workout))
        dispatch(loadWorkout(responseData.entities[0].id))
        dispatch(postWorkoutEnd(responseData.entities))
      })
      .catch(error => dispatch(postWorkoutFailure(error)))
    })
  }
}

export const requestUpdateWorkout = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'fetch'
  }
}
export const updateWorkoutSuccess = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'success'
  }
}

export const updateWorkoutFailure = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'error'
  }
}

export const updateWorkoutLocal = (workout) => {
  return {
    type: UPDATE_WORKOUT_LOCAL,
    id: workout.id,
    workout: workout
  }
}

const _validateCategory = (categoryList, category) => {
  let workoutCategory = ''
  let result =  Object.keys(categoryList).some((c) => {
    if (categoryList[c].tag === category) {
      workoutCategory = c
      return true
    }
    return false
  })
  if (result) {
    return workoutCategory
  }
  return false
}

export const updateWorkout = ({id, workout}) => {
  return (dispatch, getState) => {
    const state = getState()
    const accessToken = state.login.access_token

    let category = null
    if (workout.category)
      category = _validateCategory(state.category.data, workout.category)
    // if(!category) {
    //   alert('Invalid Category')
    //   return
    // }
    dispatch(requestUpdateWorkout())

    let data = null

    if (!category) {
      category = null
    }
    data = {
      ...workout,
      category
    }
    let dataSend = new FormData()
    dataSend.append('title', data.title)
    dataSend.append('workout_set', data.workout_set)
    dataSend.append('pause_interval', data.pause_between_exercises)
    dataSend.append('category', data.category)
    dataSend.append('image', {uri: workout.image, name: 'hello.jpg', type: 'image/jpg'})

    fetch(BASE_URL + '/workout/' + id, {
      headers: {
        'Accept': 'application/json',
        'access-token': accessToken
      },
      method: 'post',
      body: dataSend
    })
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      dispatch(
        updateWorkoutLocal(
          hydrateWorkout(responseData.entities[0].id, responseData.entities[0].entity)
        )
      )
      dispatch(updateWorkoutSuccess())
    })
    .catch((error) => {
      console.log('full failure', error)
      dispatch(updateWorkoutFailure(error))
    })
  }
}

const updateLikeWorkoutLocal = (workoutId, like) => {
  return {
    type: LIKE_WORKOUT,
    workoutId,
    like
  }
}
export const likeWorkout = ({workoutId, like}) => {
  return (dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token
    const likeId = store.workout.data[workoutId].likeId
    let likeUrl = WORKOUT_LIKE_URL_FUNC(workoutId)
    if (likeId) {
      likeUrl = FAVOURITE_URL_FUNC(likeId)
    }

    const params = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access-token': access_token
      },
      body: JSON.stringify({favorited: !!like})
    }

    return fetch(likeUrl, params)
      .then(ApiUtils.logger)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(updateLikeWorkoutLocal(workoutId, like))
        let likeMessage = like ? 'You have recently liked workout.' : 'You have recently unliked workout.'
        dispatch(showWorkoutStatusModal(likeMessage))
      })
      .catch((ex) => {
        console.log('error', ex)
        dispatch(showWorkoutStatusModal('Cannot Like Workout!! Please try again later.'))
      })
  }
}

export const viewWorkout = (workoutId) => {
  return ((dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token

    const params = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access-token': access_token
      },
      body: JSON.stringify({viewed: true})
    }
    return fetch(WORKOUT_VIEW_URL_FUNC(workoutId), params)
      .then(ApiUtils.logger)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {
        //console.log('success', jsonResponse)
      })
      .catch((ex) => {
        console.log('error', ex)
      })
  })
}

export const populateWorkouts = (workouts) => {
  return {
    type: POPULATE_WORKOUT,
    workouts: workouts
  }
}

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    workoutId
  }
}

export const populateWorkoutExercises = (workoutId, exercises) => {
  return {
    type: POPULATE_WORKOUT_EXERCISES,
    workoutId,
    exercises
  }
}

export const showWorkoutStatusModal = (statusMessage) => {
  return {
    type: WORKOUT_STATUS_MODAL,
    state: true,
    statusMessage
  }
}

export const hideWorkoutStatusModal = () => {
  return {
    type: WORKOUT_STATUS_MODAL,
    state: false,
    statusMessage: ''
  }
}

export const fetchWorkoutStart = () => {
  return {
    type: FETCH_WORKOUT,
    status: 'fetch'
  }
}
export const fetchWorkoutSuccess = () => {
  return {
    type: FETCH_WORKOUT,
    status: 'success',
    receivedTime: new Date().getTime()
  }
}
export const fetchWorkoutFailure = (errorMessage) => {
  return {
    type: FETCH_WORKOUT,
    status: 'error',
    errorMessage,
    receivedTime: new Date().getTime()
  }
}

export const fetchWorkout = (workoutId) => {
  const workoutUrl = new UrlBuilder(WORKOUT_URL_FUNC(workoutId))
    .addWithClause(['category'])
    .addWithMetaDataClause(['created_by'])
    .addWithMyActions(['favorite'])
    .toString()

  return (dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token

    const params = {
      headers: {
        'access-token': access_token
      }
    }

    dispatch(fetchWorkoutStart())
    return fetch(workoutUrl, params)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.handleMyFavoriteActionFromResponse.bind(ApiUtils))
      .then((response) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(response, ['category'], ['created_by'])

        let categories = keyBasedData['category']
        categories = ApiUtils.hydrateCategories(categories)
        dispatch(CategoryActions.addCategory(categories))

        let instructors = keyBasedData['created_by']
        instructors = ApiUtils.hydrateInstructors(instructors)
        dispatch(UserActions.populateUsers(instructors))

        return keyBasedData.data
      })
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        // Non Destructive loading of workouts
        let workout = workouts[Object.keys(workouts)[0]]
        dispatch(updateWorkoutLocal(workout))
        dispatch(fetchWorkoutSuccess())
      })
      .catch((e) => {
        dispatch(fetchWorkoutFailure(e.response))
        console.error(e)

      })
  }
}

export const publishWorkoutStart = () => {
  return {
    type: PUBLISH_WORKOUT,
    status: 'fetch'
  }
}
export const publishWorkoutSuccess = () => {
  return {
    type: PUBLISH_WORKOUT,
    status: 'success'
  }
}
export const publishWorkoutFailure = (errorMessage) => {
  return {
    type: PUBLISH_WORKOUT,
    status: 'error',
    errorMessage
  }
}
export const publishWorkoutLocal = (workoutId, published) => {
  return {
    type: PUBLISH_WORKOUT_LOCAL,
    workoutId,
    published
  }
}

export const publishWorkout = (workoutId, published) => {
  return (dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token

    const workout_url = WORKOUT_URL_FUNC(workoutId)
    const config = {
      method: 'post',
      headers: {
        'access-token': access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({published: !!published})
    }

    dispatch(publishWorkoutStart())
    return fetch(workout_url, config)
      .then(ApiUtils.logger)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => {
        const statusMessage = (published)
          ? 'Your Workout has been published.'
          : 'Your Workout has been unpublished.'

        dispatch(showWorkoutStatusModal(statusMessage))
        dispatch(publishWorkoutLocal(workoutId, published))
        dispatch(publishWorkoutSuccess())
      })
      .catch((exc) => {
        dispatch(publishWorkoutFailure(exc.response))
        dispatch(showWorkoutStatusModal('Something went terribly wrong!! Please try again later.'))
        console.error(exc)
      })
  }
}

export const updateWorkoutExercises = ({workoutId, exerciseId}) => {
  const params = {
    duration: 10,
    order: 900,
    mode: 'loop',
    workout: workoutId,
    exercise: exerciseId,
  }
  return (dispatch, getState) => {
    dispatch(updateWorkoutExercisesRequest())

    fetch(WORKOUT_EXERCISES_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'access-token': getState().login.access_token
      },
      body: JSON.stringify(params)
    })
    .then(ApiUtils.checkStatus2xx)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData, 'yo ho coke ko bottle')
      dispatch(updateWorkoutExercisesSuccess())
      // dispatch(updateWorkoutExercisesLocal(params))
    })
    .catch(error => console.error(error))
  }
}

export const updateWorkoutExercisesRequest = () => {
  return {
    type: UPDATE_WORKOUT_EXERCISES,
    status: 'fetch'
  }
}

export const updateWorkoutExercisesSuccess = () => {
  return {
    type: UPDATE_WORKOUT_EXERCISES,
    status: 'success'
  }
}

export const updateWorkoutExercisesFailure = (errorMessage) => {
  return {
    type: UPDATE_WORKOUT_EXERCISES,
    status: 'error',
    errorMessage
  }
}

export const updateWorkoutExercisesLocal = (data) => {
  return {
    type: UPDATE_WORKOUT_EXERCISES_LOCAL,
    data
  }
}
