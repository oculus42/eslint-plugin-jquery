'use strict';

const rule = require('../rules/no-jquery-html')
const RuleTester = require('eslint').RuleTester

const error = '$.html() may allow unsafe content'

const ruleTester = new RuleTester()
ruleTester.run('no-jquery-html', rule, {
  valid: [
    'html()',
    '[].html()',
    'div.html()',
    'div.html'
  ],
  invalid: [
    {
      code: '$("div").html()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.html()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().html()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").html())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
