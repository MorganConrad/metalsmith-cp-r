@ECHO OFF

REM Test script for Windows
REM assume we are running from one folder up, the folder with package.json

REM cleanup, may not be here so ignore error message
rmdir /S /Q test\to1 2> NUL

set DEBUG=metalsmith*
node test/test1 2> test/tmpfile
node test/test2

REM CLEANUP
rmdir /S /Q test\to1
del test\tmpfile
