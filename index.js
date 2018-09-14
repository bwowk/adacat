#!/usr/bin/env node
const console = require('console');
const process = require('child_process');

process.execSync(`osascript -e  'tell application "Finder" to set desktop picture to POSIX file "`+__dirname+`/ada.jpg"'`);
console.log("Meowww!");

