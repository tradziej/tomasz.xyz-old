'use strict'

const Keybase = require('./keybaseSchema');

module.exports = {
  type: Keybase,
  resolve: () => {
    return {
      login: 'tradziej',
      url: 'https://keybase.io/tradziej',
    }
  }
}