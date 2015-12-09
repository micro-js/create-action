
# create-action

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Action creator creator for flux standard actions.  Very similar to the function of the same name found in [redux-actions](https://github.com/acdlite/redux-actions), but implemented as a micro-module and without the special error handling stuff.

## Installation

    $ npm install @micro-js/create-action

## Usage

```js
var createAction = require('@micro-js/create-action')
var incrementBy = createAction(INCREMENT_BY)

// ...

dispatch(incrementBy(2))
```

## API

### createAction(type, payloadCreator, metaCreator)

- `type` - String or other identifier that represents the type of the action to create
- `payloadCreator` - Function that produces `payload` from the arguments to the action creator (optional - defaults to [https://github.com/micro-js/identity](identity))
- `metaCreator` - Function that produces `meta` from the arguments to the action creator (optional)

**Returns:** An action creator that creates an action according to the arguments specified.

## toString sugar

Action creators returned by `createAction` override `Function.prototype.toString`, and instead return the type string. This allows the function to double as the action type, for useThis means that instead of writing this:

```javascript
const SET_TEXT = 'SET_TEXT'
const setText = createAction('SET_TEXT')

export {
  setText,
  SET_TEXT
}
```

You can just write this:

```javascript
export default createAction('SET_TEXT')
```

And then use it in a [reducer map](http://github.com/micro-js/handle-actions), like this:

```javascript
combineReducers({
  text: handleActions({
    [setText]: (state, text) => text
  })
})
```

## type property

If abusing `toString` as above makes you squeamish, then the type is also set on the `type` property of the action creator, so that you can access it that way as well, if you prefer.




## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/create-action.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/create-action
[git-image]: https://img.shields.io/github/tag/micro-js/create-action.svg
[git-url]: https://github.com/micro-js/create-action
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/create-action.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/create-action
