// Load Modules
const path = require("path");
const router = require("express").Router();

// Default GET Requests (HTML)
router.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname,'../public/notes.html'));
}); 

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;