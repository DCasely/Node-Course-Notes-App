const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filtered = notes.filter((note) => note.title !== title);

  saveNotes(filtered);

  notes.length > filtered.length
    ? console.log(chalk.green.inverse('Note Removed'))
    : console.log(chalk.red.inverse('No note found!'));
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bold.white.inverse('YOUR NOTES'));

  notes.map((note) => console.log(chalk.green.bold(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();

  const foundNote = notes.find((note) => note.title === title);

  if (foundNote) {
    console.log(chalk.bold.green(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.bold.red('No note found?'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
