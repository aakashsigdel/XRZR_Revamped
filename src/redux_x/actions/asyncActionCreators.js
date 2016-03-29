// import fetch from 'isomorphic-fetch'

import {
  FETCH_CATEGORIES
} from './actionTypes'

import * as CategoryActions from './categoryActionCreators'

export function requestCategories () {
  return {
    type: FETCH_CATEGORIES,
    status: 'fetch'
  }
}

export function updateCategories (items) {
  return {
    type: FETCH_CATEGORIES,
    status: 'success',
    items: items,
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

        dispatch(CategoryActions.addCategory(categories))
        dispatch(updateCategories(Object.keys(categories)))

      }).catch((ex) => {
        console.log(ex)
        console.warn('Okay, maintenance!!! we have internet connection problem')
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
