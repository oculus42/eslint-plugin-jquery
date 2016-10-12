'use strict';

const rule = require('../rules/empty-html')
const RuleTester = require('eslint').RuleTester

const error = 'Use $.empty() rather than $.html(\'\') or omit if you are later replacing the content.'

const ruleTester = new RuleTester()
ruleTester.run('empty-html', rule, {
  valid: [
    '$("div").append("foo").html()',
    '$("div").html("<button>")',
    '$("div").html("Some text")',
    '$div.html()'
  ],
  invalid: [
    {
      code: '$("div").html("")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.html("")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().html(\'\')',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("p").html(""))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
