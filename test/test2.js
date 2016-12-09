var test = require('tape');
var fs = require('fs');

test('check debug messages', function(t) {
   var messages = fs.readFileSync('test/tmpfile').toString();
   messages = messages.replace(/\\/g, '/');  // convert all slashes to UNIX

   var lines = messages.split(/\n/);
   t.equal(lines.length, 10);  // really 9 lines but there's an extra at the end

   t.true(messages.includes('creating dir: C:/gitL/master/metalsmith-cp-r/test/to1/css'));
   t.true(lines[3].includes('test/to1/css/copyme.css'));
   t.true(lines[4].includes('Gettysburg'));

   t.false(messages.includes('ignore'));

   t.end();
})
