'use strict';

const EndomondoApi = require('endomondo-unofficial-api');

const listWorkouts = result => {
  return EndomondoApi.workouts({ authToken: result.authToken });
};

const endomondoWorkouts = EndomondoApi.authenticate({
  email: process.env.ENDOMONDO_EMAIL,
  password: process.env.ENDOMONDO_PASSWORD,
})
  .then(listWorkouts)
  .catch(result => console.log(result));

module.exports = endomondoWorkouts;
