const db = require('../db'); // Koneksi database

// Get all records from tutup_buku
const getAllTutupBuku = (req, res) => {
    const query = 'SELECT * FROM tutup_buku';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Get tutup_buku by ID
const getTutupBukuById = (req, res) => {
    const query = 'SELECT * FROM tutup_buku WHERE id_tutup_buku = ?';
    const { id_tutup_buku } = req.params;
    db.query(query, [id_tutup_buku], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(results[0]);
    });
};

// Create a new tutup_buku record
const createTutupBuku = (req, res) => {
    const {
        id_pemasukan,
        id_pengeluaran,
        id_modal,
        total_pemasukan,
        total_pengeluaran,
        saldo_akhir,
        periode,
        created_at,
        updated_at,
        keterangan
    } = req.body;
    const query = `
        INSERT INTO tutup_buku 
        (id_pemasukan, id_pengeluaran, id_modal, total_pemasukan, total_pengeluaran, saldo_akhir, periode, created_at, updated_at, keterangan) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [id_pemasukan, id_pengeluaran, id_modal, total_pemasukan, total_pengeluaran, saldo_akhir, periode, created_at, updated_at, keterangan], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id_tutup_buku: result.insertId, ...req.body });
    });
};

// Update a tutup_buku record
const updateTutupBuku = (req, res) => {
    const { id_tutup_buku } = req.params;
    const {
        id_pemasukan,
        id_pengeluaran,
        id_modal,
        total_pemasukan,
        total_pengeluaran,
        saldo_akhir,
        periode,
        created_at,
        updated_at,
        keterangan
    } = req.body;
    const query = `
        UPDATE tutup_buku 
        SET id_pemasukan = ?, id_pengeluaran = ?, id_modal = ?, total_pemasukan = ?, total_pengeluaran = ?, saldo_akhir = ?, periode = ?, created_at = ?, updated_at = ?, keterangan = ?
        WHERE id_tutup_buku = ?
    `;
    db.query(query, [id_pemasukan, id_pengeluaran, id_modal, total_pemasukan, total_pengeluaran, saldo_akhir, periode, created_at, updated_at, keterangan, id_tutup_buku], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json({ message: 'Record updated successfully' });
    });
};

// Delete a tutup_buku record
const deleteTutupBuku = (req, res) => {
    const { id_tutup_buku } = req.params;
    const query = 'DELETE FROM tutup_buku WHERE id_tutup_buku = ?';
    db.query(query, [id_tutup_buku], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json({ message: 'Record deleted successfully' });
    });
};

module.exports = {
    getAllTutupBuku,
    getTutupBukuById,
    createTutupBuku,
    updateTutupBuku,
    deleteTutupBuku,
};
