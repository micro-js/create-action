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
      payload: payload ? payload.apply(this, arguments) : arguments[0],
      meta: meta ? meta.apply(this, arguments) : meta
    }
  }
}
