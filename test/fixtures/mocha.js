/* eslint-env mocha */
'use strict'

// using .only. not ok:
describe.only('describe.only', function () {
  it('is not allowed')

  // passing an arrow function. not ok:
  it('is also forbidden to pass arrow functions',
    () => Promise.reject(new Error()))
})
