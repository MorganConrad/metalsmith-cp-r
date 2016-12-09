var cpr = require('../cp-r.js');

function done(err) { if (err) throw err; }

/*
All we do is copy the files, but the debug()) messages will get captured for later analysis by test2.js
 */
var fakeMetalsmith = { "_foo" : "test"};
var copier = cpr({ from: "test/from1", to: "_foo/to1", ignoreDir: "ignore", ignoreFile: /ignore/});
copier(null, fakeMetalsmith, done);
