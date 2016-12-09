[![Build Status](https://secure.travis-ci.org/MorganConrad/metalsmith-cp-r.png)](http://travis-ci.org/MorganConrad/metalsmith-cp-r)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/metalsmith-cp-r)
[![NPM Downloads](http://img.shields.io/npm/dm/metalsmith-cp-r.svg)](https://www.npmjs.org/package/metalsmith-cp-r)

# metalsmith-cp-r
A [Metalsmith](http://www.metalsmith.io/) plugin to copy files recursively.

### Usage

Install as usual,  `npm install metalsmith-cp-r`.

Javascript:  `use(metalsmith-cp-r(options))`

CLI: Haven't tested it yet.

#### Required "Options"

**from**:       file or directory to copy from.

**to**:         file or directory to copy into.

If **from** or **to** starts with _XXX/, they will be relative to that metalsmith property.  Common ones are:

 - _destination&nbsp;&nbsp;&nbsp;see [metalsmith.destination()](https://github.com/metalsmith/metalsmith#destinationpath)
 - _source &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see [metalsmith.source()](https://github.com/metalsmith/metalsmith#sourcepath)
 - _directory &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see metalsmith.directory() or the constructor [Metalsmith(__dirname)](https://github.com/metalsmith/metalsmith#new-metalsmithdir)

**Warning** If you use this feature, _you must use '/' (not a Windows '\\\\') as your folder delimiter._

_e.g._ to copy into the folder you set in `metalsmith.destination()` use `{ to: "_destination/your/folder/path"}`.

Otherwise, the path will be resolved normally.  (Sorry, if you really want to copy to or from a folder starting with _, the workaround is to start the path with a . or / or something...)


#### Optional Options, all default to null

**noclobber**:  if truthy, don't overwrite existing files

**dirMode**     e.g. 0o777 copied dirs will have this "mode",  default = use same mode as existing dir

**fileMode**    e.g. 0o666 copied files will have this "mode", default = use same mode as existing files

**ignoreDir**   a string or Regex, if present, ignore directories matching this pattern

**ignoreFile**  a string or Regex, if present, ignore files matching this pattern


### Notes, Todos, and Caveats

I wrote this because [metalsmith-assets](https://www.npmjs.com/package/metalsmith-assets) had a ton of obsolete dependencies and wasn't actively processing issues and pull requests.  I used an absolute minimum of dependencies (only debug) and added a few features from it's feature requests.

[metalsmith-copy-assets-540](https://www.npmjs.com/package/metalsmith-copy-assets-540) isn't recursive.

It's possible that [metalsmith-copy](https://github.com/mattwidmann/metalsmith-copy) does this better.
