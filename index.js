'use strict';

module.exports = {
  rules: {
    'no-jquery-html': require('./rules/no-jquery-html'),
    'no-empty-jquery-html': require('./rules/no-empty-jquery-html')
  },
  configs: {
    deprecated: {
      rules: {
        "various/no-jquery-html": 1,
        "various/no-empty-jquery-html": 2
      }
    },
    slim: {
      rules: {
        "various/no-jquery-html": 1,
        "various/no-empty-jquery-html": 2
      }
    }
  }
}
