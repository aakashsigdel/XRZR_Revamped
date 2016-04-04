let ApiUtils = {
  checkStatus2xx: (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    let error = new Error(response.statusText)
    error.response = response
    throw error
  },

  convertEntitiesToKeyBasedDict: (jsonResponse) => {
    let response = {}
    jsonResponse.entities.map(
      (entity) => {
        response[entity.id] = entity.entity
      }
    )
    return response
  },

  convertWorkoutsToKeyBasedDict: (jsonResponse) => {
    let response = {}
    jsonResponse.entities.map(
      (workout) => {
        response[workout.id] = hydrateWorkout(workout.id, workout.entity)
      }
    )
    return response
  }
}

function hydrateWorkout (workoutId, workout) {
  let validWorkout = {}
  if (!(workout && workoutId)) {
    return undefined
  }
  validWorkout['id'] = workoutId
  validWorkout['title'] = workout.title
  validWorkout['description'] = workout.description || 'Default Description'
  validWorkout['exercises'] = workout.exercises || []
  validWorkout['image_16x9'] = workout.image || 'http://aakashsigdel.github.io/XRZR_Files/others/workoutPlaceholder.png'
  validWorkout['duration'] = 'NA'
  validWorkout['pause_between_exercises'] = workout.pause_interval || 2
  validWorkout['instructor'] = workout.instructor || 2
  validWorkout['like'] = workout.like || false
  return validWorkout

}

export default ApiUtils