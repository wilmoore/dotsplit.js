!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.dotsplit=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// expose `dotsplit`

module.exports = dotsplit;

/**
 * Transform dot (`.`) delimited strings to array of strings.
 *
 * ### Split on dot
 *
 *    dotsplit('group.0.section.a.seat.3')
 *    //=> ['group', '0', 'section', 'a', 'seat', '3']
 *
 * ### Split on dot preserving escaped dots
 *
 *    dotsplit('01.document\.png')
 *    //=> ['01', 'document.png']
 *
 * @param  {String} string
 * dot (`.`) delimited string
 *
 * @return {Array}
 * array of strings
 */

function dotsplit(string) {
  return string
    .replace(/\\\./g, '\uffff') // escaped dots to placeholder
    .split('.')                 // split on non-escaped dots
    .map(todots);               // placeholder (escapd dots) to literal dots
}

/**
 * Change placeholder to dots.
 *
 * @param  {String} string
 * dot (`.`) delimited string with placeholders.
 *
 * @return {String}
 * dot (`.`) delimited string without placeholders.
 */

function todots(string) {
  return string.replace(/\uffff/g, '.');
}


},{}]},{},[1])
(1)
});