var express = require('express');
var router = express.Router();
var db = require('../data/mariaConnection');

router.get('/', async (req, res) => {
    const conn = await db.getConnection();
    const rows = await conn.query('SELECT * from posts');
    conn.release();
    res.send(rows);
});

router.get('/:id', async (req, res) => {
    const conn = await db.getConnection();
    const rows = await conn.query(`SELECT * from posts WHERE id = ${req.params.id}`);
    conn.release();
    res.send(rows[0]);
});

module.exports = router;