
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

