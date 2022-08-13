// Load Modules
const router = require('express').Router;
// will ask for the data in the db folder (the actual notes data).
const { notes } = require('./db/db.json');
const { writeNote } = require('./lib/functions.js');
const { uuid } = require('uuidv4');
const fs = require('fs');


// ================= //
//    API Requests   //
// ================= //

// GET Request //
router.get('/api/notes', function (req, res) {

fs.readFile('./db/dbjson', function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
    });
});
  
  
  // POST Request //
  router.post('/notes', function (req, res) {
    
    let freshNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid().toString()
    };
  
    fs.readFile('db/db.json', function (err, data) {
      if (err) throw err;
      let parsedData = JSON.parse(data);
      // let bodyData = req.body;
      parsedData.push(freshNote);
      writeNote();
    });
  });
  
  
  // DELETE Request (BONUS Request) //
  // first the path to the notes is found to be 'api/notes/:id'
  // then the callback  is used to map and splice the right note away from the array of notes.
  router.delete('api/notes/:id', function (req, res) {
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