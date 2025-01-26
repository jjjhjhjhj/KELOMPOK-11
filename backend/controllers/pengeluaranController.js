const db = require('../db'); // Koneksi database

// Mendapatkan semua data pengeluaran
exports.getPengeluaran = (req, res) => {
    const query = "SELECT * FROM tb_pengeluaran";
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Menambahkan pengeluaran baru
exports.addPengeluaran = (req, res) => {
    const { jumlah_pengeluaran, waktu, deskripsi } = req.body;
    const query = "INSERT INTO tb_pengeluaran (jumlah_pengeluaran, waktu, deskripsi) VALUES (?, ?, ?)";
    db.query(query, [jumlah_pengeluaran, waktu, deskripsi], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Pengeluaran berhasil ditambahkan", id: result.insertId });
    });
};

// Menghapus pengeluaran berdasarkan ID
exports.deletePengeluaran = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM tb_pengeluaran WHERE id_pengeluaran = ?";
    db.query(query, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Pengeluaran berhasil dihapus" });
    });
};
