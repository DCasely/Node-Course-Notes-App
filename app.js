const chalk = require('chalk');

const command = process.argv[2];

console.log(process.argv[3]);

if (command === 'add') console.log('Adding note');
if (command === 'remove') console.log('Removing note');
