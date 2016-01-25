'use strict'

/*!
 * imports.
 */

var map = require('arraymap')

/*!
 * exports.
 */

module.exports = dotsplit

/**
 * Transform dot-delimited strings to array of strings.
 *
 * @param  {String} string
 * Dot (`.`) delimited string.
 *
 * @return {Array}
 * Array of strings.
 */

function dotsplit (string) {
  return map(todots, string.replace(/\\\./g, '\uffff').split('.'))
}

/**
 * Change placeholder to dots.
 *
 * @param  {String} string
 * Dot-delimited string with placeholders.
 *
 * @return {String}
 * Dot-delimited string without placeholders.
 */

function todots (string) {
  return string.replace(/\uffff/g, '.')
}
