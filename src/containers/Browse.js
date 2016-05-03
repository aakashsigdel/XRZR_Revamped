import React, {PropTypes, Image} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BrowseIndex from '../components/browse/BrowseIndex'

import * as CategoryActionCreators from '../redux_x/actions/categoryActionCreators'
import * as FeaturedWorkoutsActionCreators from '../redux_x/actions/featuredWorkoutsActionCreators'
import * as TrendingWorkoutsActionCreators from '../redux_x/actions/trendingActionCreators'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'
import * as RecentWorkoutCreators from '../redux_x/actions/recentWorkoutsActionCreators'
import * as UiStateActionCreators from '../redux_x/actions/uiStatesActionCreators'
import * as AsyncActionCreators from '../redux_x/actions/asyncActionCreators'
import * as UserDataActionCreators from '../redux_x/actions/userDataActionCreators'

import {removeAccessTokenFromAsyncStorage} from '../utilities/utility'

class Browse extends React.Component {
  componentDidMount (nextProps, nextState) {
    this.props.categoryDispatchers.fetchCategories()
    this.props.trendingsDispatchers.fetchTrendingWorkouts()
    this.props.recentWorkoutDispatchers.fetchRecentWorkouts()
    this.props.featuredDispatchers.fetchFeaturedWorkouts()

    this.props.userDataDispatchers.fetchFavouriteExercises()
  }
  render (props = this.props) {
    let featured = workoutsManager(props.featuredWorkouts.data, props.workouts, props.instructor)
    let recent = workoutsManager(props.recentWorkouts, props.workouts, props.instructor)
    let trendings = trendingsManager(props.trendings.data, props.workouts)
    let browseListingItems = browseListingsManager(props.navigator)
    let favouriteListingItems = favouriteListingManager(props.navigator)
    let categories = categoriesManager(props.categories)

    let isFeaturedLoading = props.featuredWorkouts.isFetching
    let isTrendingLoading = props.trendings.isFetching

    let onWorkoutSelect = (workoutId) => {
      props.playerDispatchers.loadWorkout(workoutId)
      props.navigator.push({ name: 'workoutIntro' })
    }

    let onCategorySelect = (categoryId) => {
      props.uiDispatchers.switchCategory(categoryId)
      props.navigator.push({ name: 'category' })
    }

    let onSearch = () => {
      props.navigator.push({name: 'search'})
    }
    const goToProfile = () => props.navigator.push({ name: 'profile', userId: props.login.id })
    const onTabChanged = (tabName) => props.uiDispatchers.switchBrowseTab(tabName)

    return (
      <BrowseIndex
        browseListingItems={browseListingItems}
        categories={categories}
        favouriteListingItems={favouriteListingItems}
        featured={featured}
        recentWorkouts={recent}
        onCategorySelect={onCategorySelect}
        onSearch={onSearch}
        onTabChanged={onTabChanged}
        onWorkoutSelect={onWorkoutSelect}
        selectedTab={props.uiStates.selectedBrowseTab}
        trendings={trendings}
        goToProfile={goToProfile}

        isFeaturedLoading={isFeaturedLoading}
        isTrendingLoading={isTrendingLoading}
        { ...props.playerDispatchers }
      />
    )
  }
}

function workoutsManager (featuredWorkouts, workouts, instructors) {
  let featureds = featuredWorkouts.map(
    (featuredId) => {
      let instructorId = workouts[featuredId].instructor
      if (!(instructorId || workouts[featuredId].image_16x9)) {
        return null
      }
      let instructor = instructors[instructorId] || {
        name: 'Default Instructor',
        image: 'http://www.arsenalsite.cz/imgs/soupiska/200/santi-cazorla.jpg',
        isInstructor: false
      }

      return {
        ...workouts[featuredId],
        instructor: instructor
      }

    }
  )
  return featureds.filter((a) => a)
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
    onPress: removeAccessTokenFromAsyncStorage // () => undefined
  }
  ]
  return items
}
function favouriteListingManager (navigator) {
  let items = [{
    icon: 'whatshot',
    title: 'WORKOUTS',
    onPress: () => navigator.push({name: 'favouriteWorkouts'})
  }, {
    icon: 'star',
    title: 'EXERCISES',
    onPress: () => navigator.push({name: 'favouriteExercises'})
  }, {
    icon: 'star',
    iconImage: (
      <Image
        source={require('../../assets/images/history.png')}
        style={{height: 21, width: 21, resizeMode: 'contain'}}
      />
    ),
    title: 'MY WORKOUTS',
    onPress: () => navigator.push({name: 'myWorkouts'})
  }

  ]
  return items
}
function categoriesManager (categories) {
  return Object.keys(categories).map(
    (key) => {
      return {
        id: key,
        ...categories[key]
      }
    }
  )
}

Browse.propTypes = {
  instructor: PropTypes.object,
  workouts: PropTypes.object,
  trendings: PropTypes.object,
  categories: PropTypes.object,
  featuredWorkouts: PropTypes.object,
  recentWorkouts: PropTypes.array,
  uiStates: PropTypes.object,

  playerDispatchers: PropTypes.object,
  uiDispatchers: PropTypes.object,

  navigator: PropTypes.object
}

export default connect(
  (state) => {
    return {
      instructor: state.user.data,
      workouts: state.workout.data,
      trendings: state.trending,
      categories: state.category.data,
      featuredWorkouts: state.featuredWorkout,
      recentWorkouts: state.recentWorkout.data,
      uiStates: state.uiStates,
      login: state.login
    }
  },
  (dispatch) => {
    return {
      categoryDispatchers: bindActionCreators(CategoryActionCreators, dispatch),
      featuredDispatchers: bindActionCreators(FeaturedWorkoutsActionCreators, dispatch),
      trendingsDispatchers: bindActionCreators(TrendingWorkoutsActionCreators, dispatch),
      recentWorkoutDispatchers: bindActionCreators(RecentWorkoutCreators, dispatch),
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      uiDispatchers: bindActionCreators(UiStateActionCreators, dispatch),
      asyncDispatchers: bindActionCreators(AsyncActionCreators, dispatch),
      userDataDispatchers: bindActionCreators(UserDataActionCreators, dispatch)
    }
  }
)(Browse)
