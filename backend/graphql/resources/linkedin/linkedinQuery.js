'use strict'

const LinkedinDataType = require('./linkedinSchema');

const linkedInQuery = {
  type: LinkedinDataType,
  resolve: () => {
    return {
      connections: '500+ connections',
      url: 'https://www.linkedin.com/in/radziejewski/',
    }
  }
}

module.exports = linkedInQuery;