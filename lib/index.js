/**
 * Modules
 */

var identity = require('@micro-js/identity')

/**
 * Expose createAction
 */

module.exports = createAction['default'] = createAction

/**
 * createAction
 */

function createAction (type, payload, meta) {
  return function () {
    return {
      type: type,
      payload: payload ? payload.apply(null, arguments) : arguments[0],
      meta: meta ? meta.apply(null, arguments) : meta
    }
  }
}
