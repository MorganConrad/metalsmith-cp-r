@ECHO OFF

REM Test script for Windows
REM assume we are running from one folder up, the folder with package.json

REM cleanup, this folder probably not there so ignore error message
rmdir /S /Q test\to1 2> NUL

REM copy the files
node test/test1

REM get the directory listing and test it
set errorlevel=
dir /B /S test\to1 | node test/test2

REM CLEANUP
rmdir /S /Q test\to1

exit /B %errorlevel%
