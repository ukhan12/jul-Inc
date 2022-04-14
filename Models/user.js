const pool = require("../db");

class usersInfo{
    static async getAllUsers(){
        const query = 'SELECT * FROM users';
        const results = await pool.query(query);
        return results.rows;
    }
    static async getSpecificUser(id){
        const sql = `SELECT * FROM users WHERE user_id = ($1)`;

        const dbResult = await pool.query(sql,[id]);

        return dbResult.rows;
    }
    static async updateUser(id,email,password,first_name,last_name){
        const sql = `UPDATE users SET email = ($2) password = ($3) first_name = ($4) last_name = ($5) WHERE user_id = ($1)`;

        const dbResult = await pool.query(sql,[id,email,password,first_name,last_name]);

        return dbResult.rows
    }

    static async createUser(email,password,first_name,last_name){
      const sql=`INSERT INTO users (email,password,first_name,last_name) values ($1,$2,$3,$4) RETURNING *`

        const dbResult = await pool.query(sql, [email,password,first_name,last_name])
      //   console.log(dbResult.rows)
        return dbResult.rows
    }

    static async delete(id){
        if(!id) throw new Error('Id doesnt exist')

        const sql = `DELETE FROM users WHERE user_id =  ($1)`;
        
        const dbResult = await pool.query(sql,[id]);

        return dbResult.rows[0]
      
      }
    

}

module.exports = usersInfo