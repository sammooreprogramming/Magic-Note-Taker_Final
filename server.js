//  =================================================================================  //
// The following set up the basic configuration for express and a server (with PORT).  //
//  =================================================================================  //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", "./routes/apiRoutes");
app.use("/", "./routes/htmlRoutes");

// This actually deploys the listener for the server and runs it.
app.listen(PORT, () => {
  console.log(`API server now live and listening on ${PORT}`)
});
