import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAILS
} from './actionTypes'
import {populateWorkouts} from './workoutActionCreators'

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
    return fetch('https://xrzr.backlect.com/api/xrzr/v1.0/category')
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
    return fetch('https://xrzr.backlect.com/api/xrzr/v1.0/workout?filter=category:"' + categoryID + '"')
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

let ApiUtils = {
  checkStatus2xx: (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
