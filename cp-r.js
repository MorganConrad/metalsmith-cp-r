/**
 * Largely based om
 * http://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js
 */
var fs = require('fs');
var path = require('path');
var debug = require('debug')('metalsmith-cp-r');

const defaults = {
   from : "_directory/assets",
   to   : "_destination/assets"
};

module.exports = cpR;

function cpR(options) {

   options = Object.assign({}, defaults, options)
   options.noclobber = options.noclobber || options['no-clobber'];

   options.ignoreDirRegex = resolveRegex(options.ignoreDir);
   options.ignoreFileRegex = resolveRegex(options.ignoreFile);

   return function(files, metalsmith, done) {
      var from = resolvePath(options.from, metalsmith);
      var to = resolvePath(options.to, metalsmith);
      if (!fs.existsSync(from))
         return;

      debug('starting, %s -> %s', from, to);
      try {
         copyRecursiveSync(from, to, options);
         done();
      }
      catch (e) { done(e); }
   }
}


/**
 * Largely based on two answers from
 * http://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js
 */

 function copyRecursiveSync(src, dest, options) {
    var stats = fs.statSync(src);

    if (stats.isDirectory()) {

      if (options.ignoreDirRegex.test(src))
         return;

      if (!fs.existsSync(dest)) {
         var dirMode = options.dirMode || stats.mode;
         debug('creating dir: %s', dest);
         fs.mkdirSync(dest, { mode: dirMode} );
      }

      fs.readdirSync(src).forEach(function(childItemName) {
         copyRecursiveSync(path.join(src, childItemName),
         path.join(dest, childItemName),
         options);
      });
   }
   else {  // file

      if (options.noclobber && fs.existsSync(dest))
         return;
      if (options.ignoreFileRegex.test(src))
         return;

      var fileMode = options.fileMode || stats.mode;
      debug('copying file %s -> %s', src, dest);
      fs.writeFileSync(dest, fs.readFileSync(src), { mode: fileMode} );
   }
};


function resolvePath(inPath, metalsmith) {
   if ('_' === inPath.substring(0,1)) {
      var parts = inPath.split('/');
      parts[0] = metalsmith[parts[0]];
      return path.resolve.apply(null, parts);
   }

   else
      return path.resolve(inPath);
}


function resolveRegex(arg) {
   if (typeof arg === 'string')
      return new RegExp(arg);
   else if (arg instanceof RegExp)
      return arg;
   else
      return { test: function() { return false; } }
}
