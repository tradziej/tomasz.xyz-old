'use strict'

const Resume = require('./resumeSchema');

module.exports = {
  type: Resume,
  resolve: () => {
    return {
      format: 'pdf',
      url: 'https://github.com/tradziej/resume/blob/master/tomasz_radziejewski.pdf',
    }
  }
}