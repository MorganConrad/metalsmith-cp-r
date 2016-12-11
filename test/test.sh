#!/bin/bash

# Test script for Unix
# assume we are running from one folder up, the folder with package.json

# cleanup, this folder probably not there
rm -rf test/to1

# copy the files
node test/test1

#get the directory listing (using find of all things) and test it
#pipes don't work reliably so use a temporary file
find test/to1 > test/tmpfile
node test/test2 test/tmpfile
EXIT_STATUS=$?

# CLEANUP
rm -rf test/to1
rm test/tmpfile

exit $EXIT_STATUS
