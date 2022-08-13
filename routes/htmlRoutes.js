// Load Modules
const path = require("path");
const router = require("express").Router();

// Default GET Requests (HTML)
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
  }); 

  moudule.expoerts = router;