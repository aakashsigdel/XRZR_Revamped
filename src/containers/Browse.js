import React, {PropTypes} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BrowseIndex from '../components/browse/BrowseIndex'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'
import * as UiStateActionCreators from '../redux_x/actions/uiStatesActionCreators'

const Browse = (props) => {
  let featured = featuredWorkoutsManager(props.featuredWorkouts, props.workouts, props.instructor)
  let trendings = trendingsManager(props.trendings, props.workouts)
  let browseListingItems = browseListingsManager(props.navigator)
  let favouriteListingItems = favouriteListingManager(props.navigator)
  let categories = categoriesManager(props.categories)

  let onWorkoutSelect = (workoutId) => {
    props.playerDispatchers.loadWorkout(workoutId)
    props.navigator.push({name: 'workoutIntro'})
  }

  let onCategorySelect = (categoryId) => {
    props.uiDispatchers.switchCategory(categoryId)
    props.navigator.push({name: 'category'})
  }

  let onSearch = () => {
    props.navigator.push({name: 'search'})
  }

  return (
    <BrowseIndex
      browseListingItems={browseListingItems}
      categories={categories}
      favouriteListingItems={favouriteListingItems}
      featured={featured}
      onCategorySelect={onCategorySelect}
      onSearch={onSearch}
      onWorkoutSelect={onWorkoutSelect}
      trendings={trendings}
      { ...props.playerDispatchers }
    />
  )
}

function featuredWorkoutsManager (featuredWorkouts, workouts, instructors) {
  return featuredWorkouts.map(
    (featuredId) => {
      let instructorId = workouts[featuredId].instructor
      return {
        ...workouts[featuredId],
        instructor: instructors[instructorId]
      }
    }
  )
}
function trendingsManager (trendIds, workouts) {
  return trendIds.map(
    (trendId) => workouts[trendId]
  )
}
function browseListingsManager (navigator) {
  let items = [{
    icon: 'whatshot',
    title: 'Most Popular Workouts',
    onPress: () => navigator.push({name: 'mostPopular'})
  }, {
    icon: 'star',
    title: 'XRZR selected',
    onPress: () => undefined
  }
  ]
  return items
}
function favouriteListingManager (navigator) {
  let items = [{
    icon: 'whatshot',
    title: 'WORKOUTS',
    onPress: () => undefined
  }, {
    icon: 'star',
    title: 'EXERCISES',
    onPress: () => undefined
  }
  ]
  return items
}
function categoriesManager (categories) {
  return Object.keys(categories).map(
    (key) => categories[key]
  )
}

Browse.propTypes = {
  instructor: PropTypes.object,
  workouts: PropTypes.object,
  trendings: PropTypes.array,
  categories: PropTypes.object,
  featuredWorkouts: PropTypes.array,
  uiStates: PropTypes.object,

  playerDispatchers: PropTypes.object,
  uiDispatchers: PropTypes.object,

  navigator: PropTypes.object
}

export default connect(
  (state) => {
    return {
      instructor: state.instructor,
      workouts: state.workout,
      trendings: state.trending,
      categories: state.category,
      featuredWorkouts: state.featuredWorkout,
      uiStates: state.uiStates
    }
  },
  (dispatch) => {
    return {
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      uiDispatchers: bindActionCreators(UiStateActionCreators, dispatch)
    }
  }
)(Browse)
