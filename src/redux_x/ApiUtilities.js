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

  convertEntitiesToKeyBasedDictDenormalizedBy: (jsonResponse, groups) => {
    let response = {data: {}}
    groups.map((group) => { response[group] = {} })
    jsonResponse.entities.map(
      (entity) => {
        let entityData = entity.entity
        response.data[entity.id] = entityData

        groups.map((group) => {
          let groupData = entityData[group].entity
          groupData['id'] = entityData[group].id
          response[group][groupData.id] = groupData
          response.data[entity.id][group] = groupData.id
        })
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
  },

  convertExercisesFromWorkoutExercises: (jsonResponse) => {
    let response = {}
    jsonResponse.entities.map(
      (relationEntity) => {
        let relation = relationEntity.entity
        let exerciseEntity = relation.exercise
        let exercise = exerciseEntity.entity

        response[relationEntity.id] = {
          id: relationEntity.id,
          title: exercise.title,
          description: exercise.description,
          mode: relation.mode,
          instructor: 2,
          duration: relation.duration,
          videoUri: exercise.video,
          tags: exercise.tags,
          sound: exercise.sound,
          order: relation.order
        }
      }
    )
    return response
  },

  hydrateCategories: (categories) => {
    let newData = {}
    Object.keys(categories).map((categoryId) => {
      newData[categoryId] = {
        coverImage: categories[categoryId]['image'],
        tag: categories[categoryId]['category_name']
      }
    })
    return newData
  },

  hydrateWorkouts: (workouts) => {
    let newData = {}
    let categoryId = ''
    Object.keys(workouts).map((workoutId) => {
      newData[workoutId] = hydrateWorkout(workoutId, workouts[workoutId])
    })
    return newData
  }
}

function hydrateWorkout (workoutId, workout, categoryId) {
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
  validWorkout['category'] = categoryId
  return validWorkout

}

export default ApiUtils