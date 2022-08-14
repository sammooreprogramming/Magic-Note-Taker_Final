// Load Modules
const router = require('express').Router();
const { uuid } = require('uuidv4');
const fs = require('fs');


// ================= //
//    API Requests   //
// ================= //

// GET Request //
router.get('/notes', function (req, res) {

fs.readFile('./db/db.json', function (err, data) {
    if (err) throw err;
    const parsedNotes = JSON.parse(data);
    res.json(parsedNotes);
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
    
      parsedData.push(freshNote);
      
      fs.writeFile("./db/db.json",), JSON.stringify(parsedData), function (err) {
        if (err) throw err;
     }
     res.send('This was added correctly!');
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

module.exports = router;