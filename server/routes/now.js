var express = require('express');
var router = express.Router();
var db = require('../data/mariaConnection');

router.get('/', async (req, res) => {
    const conn = await db.getConnection();
    const rows = await conn.query('SELECT * from `now`;');
    conn.release();
    delete rows.meta;
    res.send(rows[0]);
});

module.exports = router;