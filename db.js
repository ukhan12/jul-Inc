const {Pool} = require('pg');

const pool = new Pool({
    user:'liam',
    password:'password',
    database:'task_managerr'
})

module.exports = pool