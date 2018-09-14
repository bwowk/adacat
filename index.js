#!/usr/bin/env node
const console = require('console');
const process = require('child_process');

process.execSync('cp '+__dirname+`/ada.jpg /tmp/ada.jpg && sqlite3 ~/Library/Application\\ Support/Dock/desktoppicture.db "DELETE FROM preferences WHERE key IN (9, 11); UPDATE data SET value = '/tmp/ada.jpg'" && killall Dock`);
console.log("Meowww!");

