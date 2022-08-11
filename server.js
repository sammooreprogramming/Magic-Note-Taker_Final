// ================================================================================= //
// The following set up the basic configuration for express and a server (with PORT).
// ================================================================================= //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const { notes } = require('./db/db.json');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// all necessary configuration functions
// function that creates a new note is below
function writeNote (body, notesArray) {
  const noteData = body
  notesArray.push(noteData);

  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify({notes: notesArray}, null, 2));
  return noteData;
};

// confirms notes by validating them.
function noteConfirm (note) {
  if (!note.title || typeof note.title !== 'string') {
      return false;
  }
  if (!note.text || typeof note.text !== 'string') {
      return false
  }
  return true;
};


// ================= //
//    API Requests   //
// ================= //


// GET Request
app.get('/api/notes', function (req, res) {
  res.json(notes);
});


//POST Request
app.post('api/notes', function (req, res) {
 let noteId  = req.body.id;
 let noteBody = req.body;
 noteId =notes.length.toString();

 if (!noteConfirm(noteBody)) {
  res.status(404).send('The page containing the note was not found.');
 } else { 
  const newNote = writeNote(noteBody, notes)
 }
});


app.listen(PORT, () => {
  console.log(`API server now listening live on port ${PORT}!`);
});
