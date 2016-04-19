import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAILS
} from './actionTypes'
import {
  CATEGORY_BASE_URL,
  CATEGORY_URL_FUNC,
  WORKOUT_BASE_URL
} from '../../constants/appConstants'

import {populateWorkouts} from './workoutActionCreators'
import UrlBuilder, {Filter} from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'

import * as UserActions from './userActionCreators'
import * as WorkoutActions from './workoutActionCreators'

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
export function categoriesFetchError(errorMessage, receivedTime) {
  return {
    type: FETCH_CATEGORIES,
    status: 'error',
    errorMessage,
    receivedTime
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
    return fetch(CATEGORY_URL_FUNC(categoryId))
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesToKeyBasedDict)
      .then((category) => {
        dispatch(addCategory(category))
        dispatch(categoriesFetchSuccess())
      })
      .catch((error) => {
        console.error('error encountered in fetching')
        dispatch(categoriesFetchError(error.response, new Date().getTime()))
      })
  }
}

export function fetchCategoriesIfNeeded (categoryIds) {
  categoryIds = Array.from(new Set(categoryIds))

  if (categoryIds.length === 0) {
    return {type: 'DO_NOTHING'}
  }

  return (dispatch, getState) => {
    let categoryState = getState().category.data

    let promices = categoryIds.map((categoryId) => {
      if (categoryState[categoryId] === undefined) {
        return dispatch(fetchCategory(categoryId))
      }
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
  let category_detail_url = new UrlBuilder(WORKOUT_BASE_URL)
    .addFilter(new Filter('category', categoryID))
    .addWithMetaDataClause(['created_by'])
    .addWithActions(['favorite'])
    .toString()

  return (dispatch) => {
    dispatch(requestCategoryDetails())
    return fetch(category_detail_url)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.handleFavoriteActionFromResponse)
      .then((jsonResponse) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(jsonResponse, [], ['created_by'])

        let instructors = keyBasedData['created_by']
        instructors = ApiUtils.hydrateInstructors(instructors)
        dispatch(UserActions.populateUsers(instructors))
        return keyBasedData.data
      })
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        console.log(workouts)
        dispatch(WorkoutActions.populateWorkouts(workouts))
        let workoutIds = Object.keys(workouts)
        dispatch(updateCategory(categoryID, {workouts: workoutIds}))
        dispatch(fetchCategoryDetailsSuccess())
      })
      .catch((ex) => {
        console.error(ex)
        dispatch(fetchCategoryDetailsError(ex.response))
      })
  }
}
