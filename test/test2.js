var test = require('tape');
var fs = require('fs');

test('check debug messages', function(t) {

   var buf = new Buffer(1000);
   var len = fs.readSync(process.stdin.fd, buf, 0, 1000, 0);
   var messages = buf.slice(0, len).toString();
   messages = messages.replace(/\\/g, '/');  // convert all slashes to UNIX

   var lines = messages.split(/\n/);
   t.equal(lines.length, 8);  // we get one extra at the end

   t.true(messages.includes('test/to1/css'));
   t.true(messages.includes('test/to1/css/copyme.css'));
   t.true(messages.includes('Gettysburg'));

   t.false(messages.includes('ignore'));

   t.end();
})
