const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config({path: "./.env"});


const configPool = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATATABLES,
    port: process.env.DB_CONN
};


const pool = new pg.Pool(configPool);

module.exports = pool;