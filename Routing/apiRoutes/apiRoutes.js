const router = require("express").Router();
const fs = require("fs");
const parsedData = JSON.parse(data);
const { notes } = require("../../db/db");

// ROUTING //
// readFile accesses the data in the db.json file and throw the error if it happens.
router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
// uses the constant parsedData as the input to transfer the data. 
        res.json(parsedData);
    });
});

