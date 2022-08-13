//  =================================================================================  //
// The following set up the basic configuration for express and a server (with PORT).  //
//  =================================================================================  //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.static('public'));


// This actually deploys the listener for the server and runs it.
router.listen(PORT, () => {
  console.log(`API server now live and listening on ${PORT}`)
});
