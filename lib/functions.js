// Requirements
const fs = require('fs');

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
  
  module.exports = { writeNote, noteConfirm };