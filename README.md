# eslint-config-max

Based on [Standard](https://github.com/feross/standard), but enforcing
additional rules to further consistency.:

## Usage

```bash
# install `eslint` and `eslint-config-max`:
npm i eslint eslint-config-max

# create your `.eslintrc` file
echo "{
  \"extends\": \"max\"
}" > .eslintrc
```

## Rules added to Standard

### `object-curly-spacing`

```javascript
// ok
exports.ok = { a: '1' }

// not ok
exports.notOk = {a: '1'}
```

### `max-len`

Lines may not be longer than 80 characters.

```javascript
// requires are ignored. ok:
require('../test/../test/../test/../test/../test/../test/../test/../test/../test')

// not ok
myModule.doSomeCalculationThatTakesALongTimeToExplain('it', 'also', 'takes', 'arguments')
```

### `require-path-exists`

```javascript
// not ok
require()
// not ok
require('some-module-that-doesn-exist')
// not ok
require('two', 'arguments')
```

### `mocha/no-exclusive-tests`

You're not allowed to use `describe.only` etc.

### `mocha/no-mocha-arrows`

You're not allowed to pass arrow functions to `describe`, `it`, etc.
