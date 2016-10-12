'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'html') return
      if (!node.arguments || node.arguments.length === 0) return
      if (node.arguments[0].value !== '') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message:  'Use $.empty() rather than $.html(\'\') or omit if you are later replacing the content.'
        })
      }
    }
  }
}

module.exports.schema = []
