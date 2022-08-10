// All requirements are met below
const router = require('express').Router();
const apiRouting = require('./apiRoutes');


//tells the router to use apirouting to route requests.
router.use(apiRouting);

module.exports = router;