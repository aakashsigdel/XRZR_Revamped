import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAILS
} from './actionTypes'
import {
  CATEGORY_BASE_URL,
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import {populateWorkouts} from './workoutActionCreators'
import ApiUtils from '../ApiUtilities'

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const updateCategory = (categoryId, categoryData) => {
  return {
    type: UPDATE_CATEGORY,
    categoryId,
    categoryData
  }
}

export const deleteCategory = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    categoryId
  }
}

export function requestCategories () {
  return {
    type: FETCH_CATEGORIES,
    status: 'fetch'
  }
}

export function categoriesFetchSuccess () {
  return {
    type: FETCH_CATEGORIES,
    status: 'success',
    receivedTime: Date.now()
  }
}

export function fetchCategories () {
  return (dispatch) => {
    dispatch(requestCategories())
    return fetch(CATEGORY_BASE_URL)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {

        let categories = {}
        jsonResponse.entities.map((category) => {
          categories[category.id] = {
            tag: category.entity.category_name,
            coverImage: category.entity.image,
            workouts: []
          }
        })

        dispatch(addCategory(categories))
        dispatch(categoriesFetchSuccess())
      }).catch((ex) => {
        console.log(ex)
        console.warn('Okay, maintenance!!! we have internet connection problem')
      })

  }
}

export function fetchCategory (categoryId) {
  return (dispatch) => {
    dispatch(requestCategories())
    return fetch(CATEGORY_BASE_URL)
  }
}

export function fetchCategoriesIfNeeded (categoryIds) {
  console.log('fetchCategoriesIfNeeded Yet to be implemented')
  return {
    type: 'nothing'
  }
}

function requestCategoryDetails () {
  return {
    type: FETCH_CATEGORY_DETAILS,
    status: 'fetch'
  }
}
function fetchCategoryDetailsSuccess () {
  return {
    type: FETCH_CATEGORY_DETAILS,
    status: 'success'
  }
}
function fetchCategoryDetailsError (errorMessage) {
  return {
    type: FETCH_CATEGORY_DETAILS,
    status: 'failure',
    errorMessage
  }
}

export function fetchCategoriesDetails (categoryID) {
  return (dispatch) => {
    dispatch(requestCategoryDetails())
    return fetch(WORKOUT_BASE_URL + '?filter=category:"' + categoryID + '"')
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {
        let workouts = {}
        let workoutIds = []
        jsonResponse.entities.map((workout) => {
          workoutIds[workoutIds.length] = workout.id
          workouts[workout.id] = {
            id: workout.id,
            title: workout.entity.title,
            description: workout.entity.description,
            image_16x9: workout.entity.image,
            pause_between_exercises: workout.entity.pause_interval,
            duration: workout.entity.duration,
            instructor: 2,
            exercises: [45, 46, 25, 19, 22, 46, 25, 19, 22, 2, 4, 42, 52, 16, 48, 47, 32, 36],
            like: false
          }
        })

        //dispatch(populateWorkouts(workouts))

        workoutIds = [3, 2, 4, 6]
        dispatch(updateCategory(categoryID, {workouts: workoutIds}))
        dispatch(fetchCategoryDetailsSuccess())
      })
      .catch((ex) => {
        console.log(ex)
        dispatch(fetchCategoryDetailsError(ex.response))
      })
  }
}


