//  =================================================================================  //
// The following set up the basic configuration for express and a server (with PORT).  //
//  =================================================================================  //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
// will ask for the data in the db folder (the actual notes data).
const { notes } = require('./db/db.json');
const { writeNote } = require('./lib/functions.js');
const { uuid } = require('uuidv4');
const fs = require('fs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// This routes to the index.html page.
app.get('/',  function (req, res) {
  res.sendFile(path.join(__dirname,'./public/index.html'));
}); 

// This routes to the notes.html page.
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 

// Defaults to index.html.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// ================= //
//    API Requests   //
// ================= //


// GET Request //
app.get('/api/notes', function (req, res) {
  res.json(notes);
});


// POST Request //
app.post('api/notes', function (req, res) {
  let freshNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid()
  };
  fs.readFile('db/db.json', function (err, data) {
    if (err) throw err;
    let parsedData = JSON.parse(data);
    parsedData.push(freshNote);
    writeNote();
  });
});

 


// DELETE Request (BONUS Request) //
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


// This actually deploys the listener for the server and runs it.
app.listen(PORT, () => {
  console.log(`API server now live and listening on ${PORT}`)
});
