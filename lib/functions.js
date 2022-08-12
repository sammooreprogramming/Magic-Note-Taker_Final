// Requirements
const fs = require('fs');

// all necessary configuration functions
// function that creates a new note is below
function writeNote () {
    fs.writeFile("../db/db.json",), JSON.stringify(freshNote), function () {
       if (err) throw err;
    }
    res.send('This was added correctly!');
  };
  
  module.exports = writeNote;