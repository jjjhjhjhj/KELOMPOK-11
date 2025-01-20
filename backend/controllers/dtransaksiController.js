const db = require('../db'); // Koneksi database

// Mendapatkan semua detail transaksi
exports.getAllDTransaksi = (req, res) => {
  const query = 'SELECT * FROM tb_dtransaksi';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching data', error: err });
    }
    res.status(200).json(results);
  });
};

// Mendapatkan detail transaksi berdasarkan ID pesanan
exports.getDTransaksiById = (req, res) => {
  const { id_pesanan } = req.params;
  const query = 'SELECT * FROM tb_dtransaksi WHERE id_pesanan = ?';
  db.query(query, [id_pesanan], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching data', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Menambahkan detail transaksi baru
exports.createDTransaksi = (req, res) => {
  const { id_pesanan, id_transaksi, jumlah, id_produk } = req.body;
  const query = 'INSERT INTO tb_dtransaksi (id_pesanan, id_transaksi, jumlah, id_produk) VALUES (?, ?, ?, ?)';
  db.query(query, [id_pesanan, id_transaksi, jumlah, id_produk], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error inserting data', error: err });
    }
    res.status(201).json({ message: 'Data created successfully', id: results.insertId });
  });
};

// Menghapus detail transaksi berdasarkan ID pesanan
exports.deleteDTransaksi = (req, res) => {
  const { id_pesanan } = req.params;
  const query = 'DELETE FROM tb_dtransaksi WHERE id_pesanan = ?';
  db.query(query, [id_pesanan], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting data', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  });
};
