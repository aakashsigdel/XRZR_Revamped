import React, { PropTypes } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import * as UiActionCreators from '../redux_x/actions/uiStatesActionCreators'
import * as UserDataActionCreators from '../redux_x/actions/userDataActionCreators'
import * as ExerciseActionCreators from '../redux_x/actions/exerciseActionCreators'

import FavouriteExercisesIndex from '../components/FavouriteExercises/FavouriteExercisesIndex'

class FavouriteExercises extends React.Component {
  componentWillMount () {
    this.props.userDataDispatchers.fetchFavouriteExercises()
  }
  render (props = this.props) {
    const favourites = favouriteExercisesManager(props.favouriteExercises.data, props.pureExercises.data)
    const onBrowseTabSelect = () => {
      props.uiDispatchers.switchBrowseTab('browse')
      props.navigator.push({name: 'browse'})
    }
    const onBackButton = props.navigator.pop
    const onDoneButton = props.uiDispatchers.doneEditFavouriteExercisesFlag
    const onEditButton = props.uiDispatchers.editFavouriteExercisesFlag
    const onRemoveButton = (exerciseId) => {
      props.userDataDispatchers.removeFavouriteExercises(exerciseId)
      props.exerciseDispatchers.likeExercise(exerciseId, false)
    }

    // @ TODO handle this thing later
    const handleEditExercise = (props) => {
      return () => {
        props.navigator.push({
          name: 'exerciseProperties',
          isNewExercise: false
        })
      }
    }
    const onNavigate = (route, exercise) => {
      const userId = props.loginCredentials.id
      const created_by = exercise.created_by
      const is_author = userId === created_by
      const actionElements = []
      if (is_author) {
        actionElements.push(...[{
          name: 'EDIT EXERCISE',
          action: handleEditExercise(props),
          icon: <Icon name='android-walk' color='rgba(255, 255, 255, 0.5)' size={25} />
        },
          {name: 'ADD EXERCISE TO A WORKOUT',
            icon: <Icon name='android-add' color='rgba(255, 255, 255, 0.5)' size={30} />,
            action: (_) => props.navigator.push({name: 'addExerciseToWorkout', exercise: exercise})
          },
          {name: 'SAVE EXERCISE', icon: <FIcon name='heart-o' color='rgba(255, 255, 255, 0.5)' size={30} />}
        ])
      }
      actionElements.push(
        {name: 'GO TO RACHEL GREY', icon: <FIcon name='angle-right' color='rgba(255, 255, 255, 0.5)' size={30} />}
      )
      const actionTitle = {
        title: exercise.title,
        subText: 'RACHEL GREY',
        image: 'http://www.arsenalsite.cz/imgs/soupiska/200/santi-cazorla.jpg'
      }

      props.navigator.push({name: route, actionElements: actionElements, actionTitle})
      // props.navigator.push({name: route, exerciseId: exerciseId})
    }
    // end

    return (
      <FavouriteExercisesIndex
        favourites={favourites}
        favouriteUiStates={props.favouriteUiStates}
        onBackButton={onBackButton}
        onBrowseTabSelect={onBrowseTabSelect}
        onDoneButton={onDoneButton}
        onEditButton={onEditButton}
        onMoreButton={onNavigate}
        onRemoveButton={onRemoveButton}
      />
    )
  }
}

function favouriteExercisesManager (favouriteIds, exercises){
  return favouriteIds.map((itemId) => {
    return {
      ...exercises[itemId],
      exerciseId: itemId
    }
  })
}

FavouriteExercises.propTypes = {}

export default connect(
  (state) => {
    return {
      pureExercises: state.pureExercise,
      favouriteExercises: state.userData.favouriteExercises,
      favouriteUiStates: state.uiStates,
      loginCredentials: state.login
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiActionCreators, dispatch),
      userDataDispatchers: bindActionCreators(UserDataActionCreators, dispatch),
      exerciseDispatchers: bindActionCreators(ExerciseActionCreators, dispatch)
    }
  }
)(FavouriteExercises)
