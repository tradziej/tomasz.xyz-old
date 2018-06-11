'use strict'

const Keybase = require('./keybaseSchema');

module.exports = {
  type: Keybase,
  resolve: () => {
    return {
      username: 'tradziej',
      url: 'https://keybase.io/tradziej',
    }
  }
}