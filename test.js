var decode = require('./index').decodeHtmlEntities;
var encode = require('./index').encodeHtmlEntities;

var assert = require('assert');

var assert_decode = function(input, output) {
  assert.equal(decode(input), output);
};

var assert_encode = function(input, output) {
  assert.equal(encode(input), output);
};

assert_decode('&amp;', '&');
assert_decode('&gt;', '>');
assert_decode('&lt;', '<');
assert_decode('Foo &amp; Bar &gt; baz.', 'Foo & Bar > baz.');
assert_decode('&#38;', '&');
assert_decode('&#x26;', '&');

assert_encode('Foo & Bar > baz.', '&#70;&#111;&#111;&#32;&#38;&#32;&#66;&#97;&#114;&#32;&#62;&#32;&#98;&#97;&#122;&#46;');
