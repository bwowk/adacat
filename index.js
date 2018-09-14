#!/usr/bin/env node
const console = require('console');
const process = require('child_process');

process.execSync('cp '+__dirname+`/ada.jpg /tmp/ada.jpg && sqlite3 ~/Library/Application\\ Support/Dock/desktoppicture.db "update data set value = '/tmp/ada.jpg'" && killall Dock`);
console.log("Meowww!");

