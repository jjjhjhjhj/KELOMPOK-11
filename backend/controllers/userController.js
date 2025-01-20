const db = require('../db');

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM tb_users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Menambahkan pengguna baru
exports.createUser = (req, res) => {
  const { nama, email, password } = req.body;
  const query = 'INSERT INTO tb_users (Nama, Email, Password) VALUES (?, ?, ?)';
  db.query(query, [nama, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User added successfully', userId: result.insertId });
  });
};

// Mengupdate data pengguna
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nama, email, password } = req.body;
  const query = 'UPDATE tb_users SET Nama = ?, Email = ?, Password = ? WHERE id_pengguna = ?';
  db.query(query, [nama, email, password, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User updated successfully' });
  });
};

// Menghapus pengguna
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tb_users WHERE id_pengguna = ?';
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User deleted successfully' });
  });
};
