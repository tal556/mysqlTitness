require('dotenv').config()
const mysql = require('mysql2/promise');

// Create the connection to database
const pool = mysql.createPool({
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

  async function query(sql, params) {
    const [rows, fields] = await pool.query(sql, params);
    return rows;
  }
  
  async function getAllUsers() {
    const sql = 'SELECT * FROM users';
    return await query(sql);
  }
  
  async function getUserById(userId) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    return await query(sql, [userId]);
  }
  
  async function insertUser(first_name, last_name, email, password, active, insertData, updateData) {
    const sql = 'INSERT INTO users (first_name, last_name, email, password, active, insertData, updateData) VALUES (?, ?, ?, ?, ?, ?, ?)';
    return await query(sql, [first_name, last_name, email, password, active, insertData, updateData]);
  }
  
  
  module.exports = {
    query,
    getAllUsers,
    getUserById,
    insertUser
  };
