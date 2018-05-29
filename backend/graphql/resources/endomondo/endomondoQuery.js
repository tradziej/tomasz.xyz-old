'use strict'

const endomondo = require('../../../models/endomondo');
const Endomondo = require('./endomondoSchema');
const DateTime = require('luxon').DateTime;

const lastWeekRunning = (workout) => {
  const workoutTime = DateTime.fromFormat(workout.start_time, 'y-M-d HH:mm:ss UTC');
  const weekAgo = DateTime.local().minus({ days: 7 });

  return workout.sport === 0 && workoutTime >= weekAgo;
}

const getWorkoutDistance = () => {
  return endomondo.then((result) => {
    return result.data.filter(lastWeekRunning).reduce((prevVal, workout) => {
      return prevVal + workout.distance_km;
    }, 0);
  });
}

const endomondoQuery = {
  type: Endomondo,
  resolve: () => getWorkoutDistance()
}

module.exports = endomondoQuery;