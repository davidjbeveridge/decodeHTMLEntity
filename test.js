var decode = require('./index');

var assert = function (assertion, description) {
  if(!assertion) throw new Error("Failed: "+description);
  console.log("Passed: "+description);
};

var quote = function(str) {
  return '"'+str+'"';
};

var assert_decode = function(input, output) {
  var description = [input, output].map(quote).join(' => ');
  try {
    assert(decode(input) === output, description);
  } catch (e) {
    throw "Failed: '"+description+"';\nExpected: '"+output+"';\nGot: '"+decode(input)+"'";
  }
};

assert_decode('&amp;', '&');
assert_decode('&gt;', '>');
assert_decode('&lt;', '<');
assert_decode('Foo &amp; Bar &gt; baz.', 'Foo & Bar > baz.');

assert_decode('&#38;', '&');
assert_decode('&#x26;', '&');
