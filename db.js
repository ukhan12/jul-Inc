const {Pool} = require('pg');

const pool = new Pool({
    user:'jah',
    password:'nohacking',
    database:'task_managerr'
})

module.exports = pool