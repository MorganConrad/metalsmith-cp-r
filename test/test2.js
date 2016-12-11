var test = require('tape');
var fs = require('fs');

test('check debug messages', function(t) {

   var messages = fs.readFileSync(process.argv[2], "utf8");
   messages = messages.replace(/\\/g, '/');  // convert all slashes to UNIX

   var lines = messages.split(/\n/);

   t.equal(lines.length, 9);  // we get one extra at the end

   t.true(messages.includes('test/to1/css'));
   t.true(messages.includes('test/to1/css/copyme.css'));
   t.true(messages.includes('Gettysburg'));

   t.false(messages.includes('ignore'));

   t.end();
})
