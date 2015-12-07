/**
 * Imports
 */

var createAction = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(createAction('test')(1), {type: 'test', payload: 1, meta: undefined})
  t.deepEqual(createAction('test', add1)(1), {type: 'test', payload: 2, meta: undefined})
  t.deepEqual(createAction('test', add1, add1)(1), {type: 'test', payload: 2, meta: 2})
  t.end()
})

function add1 (n) {
  return n + 1
}
