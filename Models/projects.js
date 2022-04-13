const pool = require("../db");

class projectsManager{
    static async getAllProjects(){
        const query = 'SELECT * FROM projects';
        const results = await pool.query(query);
        return results.rows;
    }

    static async getOneProject(id){
        const query = 'SELECT * FROM projects WHERE id = $1'
        const results = await pool.query(query, [id]);
        return results.rows;
    }

    static async updateProject(description, id){
        const query = 'UPDATE projects SET description = $1 WHERE id = $2';
        const results = await pool.query(query, [description, id]);
        return results.rows;
    }

    static async markComplete(id, completed){
        if(!id) throw new Error('An id is required');
        const query = 'UPDATE projects SET completed = true WHERE id = $1';
        const results = await pool.query(query, [id]);
        return results.rows[0];
    }

    static async newProject(description){
        const query = 'INSERT INTO projects (description) VALUES ($1) RETURNING *'
        const results = await pool.query(query, [description]);
        return results.rows;
    }

    static async removeProject(id){
        if(!id) throw newError('Id does not exist')
        const query = 'DELETE FROM projects WHERE id = $1';
        const results = await pool.query(query,[id]);
        return results.rows;
    }
}

module.exports = projectsManager;