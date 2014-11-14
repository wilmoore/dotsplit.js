# dotsplit.js

[![Build Status](http://img.shields.io/travis/wilmoore/dotsplit.js.svg)](https://travis-ci.org/wilmoore/dotsplit.js) [![NPM version](http://img.shields.io/npm/v/dotsplit.js.svg)](https://www.npmjs.org/package/dotsplit.js) [![NPM downloads](http://img.shields.io/npm/dm/dotsplit.js.svg)](https://www.npmjs.org/package/dotsplit.js) [![LICENSE](http://img.shields.io/npm/l/dotsplit.js.svg)](license)

> Transform dot (`.`) delimited strings to array of strings for [Node.js][] and the browser.

## Examples

#### Split on dot

    dotsplit('group.0.section.a.seat.3')
    //=> ['group', '0', 'section', 'a', 'seat', '3']

#### Split on dot preserving escaped characters

    dotsplit('01.document\\.png')
    //=> ['01', 'document.png']

## Installation

[component](http://component.io/wilmoore/dotsplit.js)

    $ component install wilmoore/dotsplit.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install dotsplit.js

[npm](https://npmjs.org/package/dotsplit.js)

[![NPM](https://nodei.co/npm/dotsplit.js.png?downloads=true)](https://nodei.co/npm/dotsplit.js/)

[jam](http://jamjs.org/packages/#/details/dotsplit.js)

    $ jam install dotsplit.js

[volo](http://volojs.org)

    $ volo add wilmoore/dotsplit.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/dotsplit.js/master/dotsplit.js

2. use

        <script src="dotsplit.js"></script>

## Inspiration

- [selectn][]
- [grunt#util.namespace.getParts()][getParts]

## License

  [MIT](license)

[selectn]:  https://github.com/wilmoore/selectn
[Node.js]:  http://nodejs.org
[getParts]: https://github.com/gruntjs/grunt/blob/master/lib/util/namespace.js#L17
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/

