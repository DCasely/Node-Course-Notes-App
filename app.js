const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
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

  handler(argv) {
    notes.addNote(argv.title, argv.body);
    console.log(chalk.green.inverse('Note Added'));
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Remove title',
      demandOption: true,
      type: 'string',
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a new note',

  handler() {
    console.log('Reading a new note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a new note',

  handler() {
    console.log('Listing a new note!');
  },
});

yargs.parse();
