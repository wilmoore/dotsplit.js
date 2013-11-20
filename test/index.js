var expect = require('chai').expect;
var dotsplit = require('..');

describe('dotsplit()', function(){

  it('splits dot delimited strings', function() {
    var result = dotsplit('group.0.section.a.seat.3');
    var expected = ['group', '0', 'section', 'a', 'seat', '3'];

    expect(result).to.deep.equal(expected);
  });

  it('preserves dot when escaped', function() {
    var result = dotsplit('01.document\\.png');
    var expected = ['01', 'document.png'];

    expect(result).to.deep.equal(expected);
  });

});
