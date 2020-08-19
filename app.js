const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs verfsion
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: function () {
    console.log('Removing a new note!');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a new note',
  handler: function () {
    console.log('Reading a new note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a new note',
  handler: function () {
    console.log('Listing a new note!');
  },
});

yargs.parse();
