'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var dotsplit = require('./')

/*!
 * tests.
 */

test('dotsplit()', function (t) {
  t.deepEqual(dotsplit('group.0.section.a.seat.3'), ['group', '0', 'section', 'a', 'seat', '3'], 'splits dot delimited strings')
  t.deepEqual(dotsplit('01.document\\.png'), ['01', 'document.png'], 'preserves dot when escaped')
  t.deepEqual(dotsplit(), [], 'returns empty array given undefined input')
  t.deepEqual(dotsplit(false), [], 'returns empty array given falsey input')
  t.deepEqual(dotsplit(true), [], 'returns empty array given non-string input')
  t.end()
})
