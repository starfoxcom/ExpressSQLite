// Require express router
const router = require('express').Router();


router.get('/', (req, res) => {

    res.send("SQLite Express API");
  });

  module.exports = router;