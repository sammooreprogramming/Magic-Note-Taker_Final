//  =================================================================================  //
// The following set up the basic configuration for express and a server (with PORT).  //
//  =================================================================================  //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoute);
app.use("/", htmlRoute);

// This actually deploys the server and runs it.
app.listen(PORT, () => {
  console.log(`API server now live and listening on PORT ${PORT}`)
});
