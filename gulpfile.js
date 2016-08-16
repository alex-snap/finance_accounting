const requireDir = require('require-dir');

// Require all front-end tasks including subfolders
requireDir('./client/gulp/tasks', { recurse: true });