let ApiUtils = {
  checkStatus2xx: (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    let error = new Error(response.statusText)
    error.response = response
    throw error
  },

  logger: (response) => {
    console.log(response)
    return response
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

        let backpropagate = groups.map((group) => {
          if (!entityData[group]) {
            return false
          }

          let groupData = entityData[group].entity
          groupData['id'] = entityData[group].id
          response[group][groupData.id] = groupData
          response.data[entity.id][group] = groupData.id

          return true
        })

        if (!backpropagate.every((item) => item)) {
          response.data[entity.id] = undefined
        }
      }
    )
    return response
  },

  convertEntitiesAndAssets: (jsonResponse) => {
    let response = {data:{}, asset: {}}
    jsonResponse.entities.map(
      (entity) => {
        let entityData = entity.entity
        response.data[entity.id] = entityData

        let asset = entity.asset
        response.asset[asset.id] = asset.entity
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
          order: relation.order,
          exerciseId: exerciseEntity.id
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

export function hydrateWorkout (workoutId, workout) {
  let validWorkout = {...workout}
  if (!(workout && workoutId)) {
    return undefined
  }
  validWorkout['id'] = workoutId
  validWorkout['title'] = workout.title
  validWorkout['description'] = workout.description || 'Default Description'
  validWorkout['exercises'] = workout.exercises || []
  validWorkout['image_16x9'] = workout.image || 'http://aakashsigdel.github.io/XRZR_Files/others/workoutPlaceholder.png'
  validWorkout['duration'] = workout.duration || 'NA'
  validWorkout['pause_between_exercises'] = workout.pause_interval || 2
  validWorkout['instructor'] = workout.instructor || 2
  validWorkout['like'] = workout.like || false
  validWorkout['workout_set'] = workout.workout_set || 4
  validWorkout['category'] = workout.category
  if (workout.category.split('/').length !== 1) {
    validWorkout['category'] = workout.category.split('/')[1]
  }
  return validWorkout
}

export function mapUserApiKeysToAppKeys (user) {
  let validUser = {}
  if (!user) {
    return user
  }

  validUser.id = user.id
  validUser.name = user.name
  validUser.image = user.profile_pic
  validUser.isInstructor = user.is_instructor
  validUser.workout = user.favorite_workouts || []

  return validUser
}

export default ApiUtils
