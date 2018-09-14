#!/usr/bin/env node
const console = require('console');
const process = require('shell-exec')

process(`
cp ${__dirname}/ada.jpg /tmp/ada.jpg &&
sqlite3 ~/Library/Application\\ Support/Dock/desktoppicture.db "
    DELETE FROM data;
    DELETE FROM displays;
    DELETE FROM pictures;
    DELETE FROM preferences;
    DELETE FROM prefs;
    DELETE FROM spaces;
    INSERT INTO pictures (space_id, display_id) VALUES (null, null);
    INSERT INTO data (value) VALUES ('/tmp/ada.jpg');
    INSERT INTO preferences (key, data_id, picture_id) VALUES (1, 1, 1);
    INSERT INTO data (value) VALUES (1);
    INSERT INTO preferences (key, data_id, picture_id) VALUES (2, 2, 1);
" && killall Dock
`).then(() => console.log("Meowww!"));