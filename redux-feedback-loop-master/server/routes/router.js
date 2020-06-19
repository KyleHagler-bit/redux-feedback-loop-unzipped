const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get('/review', (req, res) => {
  console.log('GET in router');
  pool.query('SELECT * from "feedback";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET ', error)
      res.sendStatus(500);
  });
})

module.exports = router;