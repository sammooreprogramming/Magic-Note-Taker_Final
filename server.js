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

// This function confirms notes via validation.
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

// POST Request
app.post('api/notes', function (req, res) {
 let noteId  = req.body.id;
 let noteBody = req.body;
 // ID is created based off the next index's array.
 noteId = notes.length.toString();
// validation used
 if (!noteConfirm(noteBody)) {
  res.status(406).send('The note was not acceptable.');
 } else { 
  const newNote = writeNote(noteBody, notes)
  res.json(newNote);
 }
});

// DELETE Request (BONUS Request)
// first the path to the notes is found to be 'api/notes/:id'
// then the callback  is used to map and splice the right note away from the array of notes.
app.delete('api/notes/:id', function (req, res) {
const clearNote = req.params.id;
// the new array formed from map() will be accurate to the current note, relatively speaking,
// after the splice() method is used to delete the note that isn't needed by editing the array and overwriting 1 item via subtraction.
notes.map((element, index), function () {
if (clearNote = element.id) {
  notes.splice(index, 1);
// returns the JSON data from the element.
  return res.json(element);
    }
  });
});

// This routes to the index.html page.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
}); 

// This routes to the notes.html page.
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 

// This actually deploys the listener for the server and runs it.
app.listen(PORT, () => {
  console.log(`API server now listening live on port ${PORT}!`);
});
