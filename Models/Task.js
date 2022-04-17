const pool = require("../db");

class TasksManager{
    static async findAll() {
        const sql = `SELECT * FROM tasks`;
    
        const dbResult = await pool.query(sql);
    
        return dbResult.rows;
      }
      static async getSpecificTask(id){
          const sql = `SELECT * FROM tasks WHERE task_id = ($1)`;

          const dbResult = await pool.query(sql,[id]);

          return dbResult.rows;
      }

      static async updateTask(id,Task){
          const sql = `UPDATE tasks SET task = ($2) WHERE task_id = ($1)`;

          const dbResult = await pool.query(sql,[id,Task]);

          return dbResult.rows
      }

      static async markCompletedd(id,Completed){
          if(!id) throw new Error(`An id is required`);
          const sql = `UPDATE tasks SET completed = true WHERE task_id = $1`

          const dbResult = await pool.query(sql,[id]);
         
          return dbResult.rows[0]
      }
      static async create(data){
          console.log(data)
          const sql=`INSERT INTO tasks (task) values ($1) RETURNING *`

          const dbResult = await pool.query(sql, [data])
          return dbResult.rows
      }

      static async remove(id){
        if(!id) throw new Error('Id doesnt exist')

        const sql = `DELETE FROM tasks WHERE task_id =  ($1)`;
        
        const dbResult = await pool.query(sql,[id]);

        return dbResult.rows[0]
      
      }
}

module.exports = TasksManager