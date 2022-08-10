// all Requirements are listed below.
const path = require('path');
const router = require('express').Router();

// this will return the notes.html.
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

// this will return the index.html.
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;