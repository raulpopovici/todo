const Pool = require("pg").Pool;


// here we connect to out data base

const pool = new Pool({

    user:"postgres",
    password:"123456789",
    host:"localhost",
    port:5432,
    database:"perntodo"

});

module.exports = pool;