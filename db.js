const {Pool} = require('pg');

const pool = new Pool({
    user:'uzma',
    password:'123',
    database:'task_managerr'
})

module.exports = pool