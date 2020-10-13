const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'letmein',
    connectionLimit: 5,
    database: 'nick_site',
    port: 3307
});

module.exports = pool;