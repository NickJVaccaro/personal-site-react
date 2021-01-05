var express = require('express');
var router = express.Router();
var db = require('../data/mariaConnection');

router.get('/', async (req, res) => {
    const conn = await db.getConnection();
    const rows = await conn.query('SELECT * from projects');
    conn.release();
    res.send(rows);
});

module.exports = router;