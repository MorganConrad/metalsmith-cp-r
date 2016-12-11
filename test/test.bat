@ECHO OFF

REM Test script for Windows
REM assume we are running from one folder up, the folder with package.json

REM cleanup, this folder probably not there so ignore error message
rmdir /S /Q test\to1 2> NUL

REM copy the files
node test/test1

REM get the directory listing and test it
REM pipes were not robust so use intermediate temp file
dir /B /S test\to1 > test\tempfile
set errorlevel= node test/test2 test\tempfile

REM CLEANUP
rmdir /S /Q test\to1
del test\tempfile

exit /B %errorlevel%
