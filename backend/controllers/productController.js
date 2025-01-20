const db = require('../db');

// Mendapatkan semua produk
exports.getAllProducts = (req, res) => {
  const query = 'SELECT * FROM tb_produk';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

// Menambahkan produk baru
exports.addProduct = (req, res) => {
  const { id_produk, nama_produk, harga } = req.body;
  const query = 'INSERT INTO tb_produk (id_produk, nama_produk, harga) VALUES (?, ?, ?)';
  db.query(query, [id_produk, nama_produk, harga], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Product added successfully', productId: results.insertId });
    }
  });
};

// Mengupdate produk berdasarkan ID
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { nama_produk, harga } = req.body;
  const query = 'UPDATE tb_produk SET nama_produk = ?, harga = ? WHERE id_produk = ?';
  db.query(query, [nama_produk, harga, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'Product updated successfully' });
    }
  });
};

// Menghapus produk berdasarkan ID
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tb_produk WHERE id_produk = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  });
};
