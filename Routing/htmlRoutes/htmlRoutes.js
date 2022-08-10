// all Requirements are listed below.
const path = require('path');
const router = require('express').Router();

// this will send the user to index.html upon 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index/html'));
});

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

mpdule.exports = router;