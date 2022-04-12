const pool = require("../db");

class TasksManager{
    static async findAll() {
        const sql = `Select * FROM "Tasks"`;
    
        const dbResult = await pool.query(sql);
    
        return dbResult.rows;
      }
      static async getSpecificTask(id){
          const sql = `select * from "Tasks" where "Task_Id" = ($1)`;

          const dbResult = await pool.query(sql,[id]);

          return dbResult.rows;
      }

      static async updateTask(id,Task){
          const sql = `Update "Tasks" set "Task" = ($2) where "Task_Id" = ($1)`;

          const dbResult = await pool.query(sql,[id,Task]);

          return dbResult.rows
      }

      static async markCompletedd(id,Completed){
          if(!id) throw new Error(`An Id is required`);
          const sql = `UPDATE "Tasks" set "Completed" = true where "Task_Id" = ($1)`

          const dbResult = await pool.query(sql,[id]);
         
          return dbResult.rows[0]
      }
      static async create(data){
          console.log(data)
        const sql=`insert into "Tasks" ("Task") values ($1) returning *`

          const dbResult = await pool.query(sql, [data])
        //   console.log(dbResult.rows)
          return dbResult.rows
      }
      
      static async delete(id){
          if(!id) throw new Error('Id doesnt exist')

          const sql = `SELECT FROM "Tasks" WHERE "Task_Id" =  ($1)`;
          
          const dbResult = await pool.query(sql);

          return dbResult.rows[0]
        
      }
      static async remove(id){
        if(!id) throw new Error('Id doesnt exist')

        const sql = `DELETE FROM "Tasks" WHERE "Task_Id" =  ($1)`;
        
        const dbResult = await pool.query(sql,[id]);

        return dbResult.rows[0]
      
      }
}

module.exports = TasksManager