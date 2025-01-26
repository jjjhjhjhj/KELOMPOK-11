const db = require('../db');

// Mendapatkan semua data pemasukan
exports.getAllPemasukan = (req, res) => {
    const query = 'SELECT * FROM pemasukan';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Menambahkan pemasukan baru
exports.addPemasukan = (req, res) => {
    const { amount, created_at, id_pemasukan } = req.body;
    const query = 'INSERT INTO pemasukan (amount, created_at, id_pemasukan) VALUES (?, ?, ?)';
    db.query(query, [amount, created_at, id_pemasukan], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Pemasukan berhasil ditambahkan', id: result.insertId });
    });
};

// Menghapus pemasukan berdasarkan ID
exports.deletePemasukan = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM pemasukan WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Pemasukan tidak ditemukan' });
        res.status(200).json({ message: 'Pemasukan berhasil dihapus' });
    });
};
