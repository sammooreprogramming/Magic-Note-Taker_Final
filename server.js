// All requirements below.
const express = require("express");

// Express configuration.
const app  = express();
const PORT = process.env.PORT || 3001

// Configures express for data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// This hosts the public folder.
app.use(express.static('public'));

require("./Routing/apiRoutes/apiRoutes.js");
require("./Routing/htmlRoutes/htmlRoutes.js");

// Code to have the server listen.
app.listen(PORT, function () {
    console.log(`App live and listening on ${PORT}`);
});