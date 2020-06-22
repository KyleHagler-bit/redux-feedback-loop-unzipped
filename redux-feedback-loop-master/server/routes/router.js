const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET (as in get data from database to admin page table)
router.get('/', (req, res) => {
  console.log('GET in router');
  pool.query('SELECT * from "feedback";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET ', error)
    res.sendStatus(500);
  });
})

//POST (as in post new data to database table)
router.post("/", async (req, res) => {
  const client = await pool.connect();

  try {
    const {
      feeling,
      understanding,
      support,
      comments
    } = req.body;
    await client.query("BEGIN");
    const orderInsertResults = await client.query(
      `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`,
      [feeling, understanding, support, comments]
    );

    await client.query("COMMIT");
    res.sendStatus(201);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Error POST /api/review", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});

//DELETE
router.delete('/:id', (req, res) => {
  let entryId = req.params.id;
  console.log('Delete request for id', entryId);
  let sqlText = 'DELETE FROM feedback WHERE id=$1;';
  pool.query(sqlText, [entryId])
      .then((result) => {
          console.log('entry deleted');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})

module.exports = router;