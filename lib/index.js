/**
 * Expose createAction
 */

module.exports = createAction['default'] = createAction

/**
 * createAction
 */

function createAction (type, payload, meta) {
  function actionCreator () {
    return {
      type: type,
      payload: payload ? payload.apply(this, arguments) : arguments[0],
      meta: meta ? meta.apply(this, arguments) : meta
    }
  }

  actionCreator.type = type
  actionCreator.toString = toString

  return actionCreator
}

// Allow the function to be used as an object
// key for your reducer maps, obviating the
// need for the additional variable.
function toString () {
  return this.type
}
