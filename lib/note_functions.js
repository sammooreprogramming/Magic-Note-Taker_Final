const fs = require("fs");
const path = require("path");

// function that creates a new note is below
function writeNote (body, notesArray) {
    const noteData = body
    notesArray.push(noteData);

    fs.writeFile(path.join("../db/db.json"), JSON.stringify({notes: notesArray}, null, 2));
    return noteData;
}

module.exports = writeNote;