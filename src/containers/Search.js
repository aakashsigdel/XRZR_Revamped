import React, {
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UiStateActionCreators from '../redux_x/actions/uiStatesActionCreators'
import * as SearchActionCreators from '../redux_x/actions/searchActionCreators'
import SearchIndex from '../components/Search/SearchIndex'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  render (props = this.props) {
    let onCategorySelect = (categoryId) => {
      props.uiDispatchers.switchCategory(categoryId)
      props.navigator.push({ name: 'category' })
    }

    const loadWorkout = (workoutId) => {
      props.loadWorkout(workoutId)
      props.navigator.push({
        name: 'workoutIntro'
      })
    }

    let onClosePressed = () => {
      props.navigator.pop()
    }

    let onSearchPressed = () => {
      props.searchDispatchers.fetchSearchResult(this.state.searchText)
    }
    let onSearchInput = (text) => {
      this.setState({
        searchText: text
      })
    }

    let searchResults = props.searchResults.workouts[props.searchResults.latestSearchQuery]
    let workouts = []
    if (searchResults) {
      workouts = searchResults.data
      workouts = workoutIdsToWorkouts(workouts, props.workouts)
      workouts = denormalizeInstructor(workouts, props.instructors)
    }

    let searchOnProgress = props.searchResults.isFetching

    return (
      <SearchIndex
        categories={denormalizeCategories(props.categories)}
        loadWorkout={loadWorkout}
        onCategorySelect={onCategorySelect}
        onClosePressed={onClosePressed}
        onSearchButton={onSearchPressed}
        onSearchInput={onSearchInput}
        searchText={this.state.searchText}
        searchOnProgress={searchOnProgress}
        workouts={workouts}
      />
    )
  }
}

function workoutIdsToWorkouts (workoutIds, workouts) {
  return workoutIds.map((workoutId) => {
    return workouts[workoutId]
  })
}

function denormalizeInstructor (workouts, instructors) {
  return Object.keys(workouts).map(
    (workoutId) => {
      let workout = workouts[workoutId]
      let instructor = instructors[workout.instructor]
      if (!instructor || !workout) {
        return false
      }
      return {
        ...workout,
        instructor: instructor
      }
    }
  ).filter((workout) => workout)
}
function denormalizeCategories (categories) {
  return Object.keys(categories).map((categoryId) => categories[categoryId])
}

export default connect(
  (state) => {
    return {
      workouts: state.workout.data,
      categories: state.category,
      instructors: state.user.data,
      searchResults: state.search
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiStateActionCreators, dispatch),
      loadWorkout: bindActionCreators(loadWorkout, dispatch),
      searchDispatchers: bindActionCreators(SearchActionCreators, dispatch)
    }
  }
)(Search)
