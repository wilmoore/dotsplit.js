'use strict'

/*!
 * imports.
 */

var dotted = require('arraymap')(todots)
var compact = require('array.filter')(String)
var toString = Object.prototype.toString

/*!
 * exports.
 */

module.exports = dotsplit

/**
 * Transform dot-delimited strings to array of strings.
 *
 * @param  {String} string
 * Dot-delimited string.
 *
 * @return {Array}
 * Array of strings.
 */

function dotsplit (string) {
  return dotted(normalize(string))
}

/**
 * Normalize string by:
 *
 * (1) Dropping falsey values (empty, null, etc.)
 * (2) Replacing escapes with a placeholder.
 * (3) Splitting string on `.` delimiter.
 * (4) Dropping empty values from resulting array.
 *
 * @param  {String} string
 * Dot-delimited string.
 *
 * @return {Array}
 * Array of strings.
 */

function normalize (string) {
  return compact(
    (toString.call(string) === '[object String]' ? string : '')
    .replace(/\\\./g, '\uffff')
    .split('.')
  )
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
