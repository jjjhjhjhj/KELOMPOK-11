const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username database Anda
  password: '', // Ganti dengan password database Anda
  database: 'db_uangan' // Nama database sesuai dengan gambar
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
