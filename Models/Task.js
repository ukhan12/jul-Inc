const pool = require("../db");

class TasksManager{
    static async findAll() {
        const sql = `Select * FROM Tasks`;
    
        const dbResult = await pool.query(sql);
    
        return dbResult.rows;
      }
}

module.exports = Task