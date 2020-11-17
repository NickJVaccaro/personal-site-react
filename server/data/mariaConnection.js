const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3307
});

module.exports = pool;