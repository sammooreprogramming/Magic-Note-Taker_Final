// Load Modules
const router = require('express').Router();
const { uuid } = require('uuidv4');
const fs = require('fs');
const store = require('../db/store');

// ================= //
//    API Requests   //
// ================= //

// GET Request //
router.get('/notes', function (req, res) {

store.getNotes().then(function notes () {
res.json(notes).catch(err => {
  res.status(500).json(err);
    });
  });
});
  

  // POST Request //
  router.post('/notes', function (req, res) {
    store.addNote(req.body).then(function note () {
      res.json(note)
    }).catch(err => {
      res.status(500).json(err);
      });
    });
  

  // DELETE Request (BONUS Request) //

  // first the path to the notes is found to be 'api/notes/:id'
  // then the callback  is used to map and splice the right note away from the array of notes.
  router.delete('/notes/:id', function (req, res) {

    store.removeNote(req.params.id).then(function () {
      res.json({  ok: true }).catch(err => {
        res.status(500).json(err);
      });
    });
  });

module.exports = router;