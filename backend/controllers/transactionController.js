const db = require('../db');

// Mendapatkan semua transaksi
const getAllTransactions = (req, res) => {
  const query = 'SELECT * FROM tb_transaksi';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Menambahkan transaksi baru
const addTransaction = (req, res) => {
  const { id_transaksi, waktu, jumlah_transaksi, user_id } = req.body;
  const query = 'INSERT INTO tb_transaksi (id_transaksi, waktu, jumlah_transaksi, user_id) VALUES (?, ?, ?, ?)';
  db.query(query, [id_transaksi, waktu, jumlah_transaksi, user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Transaction added successfully', transactionId: results.insertId });
  });
};

// Menghapus transaksi
const deleteTransaction = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tb_transaksi WHERE id_transaksi = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  });
};

module.exports = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
};
