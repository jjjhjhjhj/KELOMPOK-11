const db = require('../db'); // Koneksi database

// Get all modal
const getAllModal = (req, res) => {
    const query = 'SELECT * FROM modal';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Get modal by ID
const getModalById = (req, res) => {
    const query = 'SELECT * FROM modal WHERE id = ?';
    const { id } = req.params;
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Modal not found' });
        res.status(200).json(results[0]);
    });
};

// Create new modal
const createModal = (req, res) => {
    const { amount, description, created_at } = req.body;
    const query = 'INSERT INTO modal (amount, description, created_at) VALUES (?, ?, ?)';
    db.query(query, [amount, description, created_at], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, amount, description, created_at });
    });
};

// Update modal
const updateModal = (req, res) => {
    const { id } = req.params;
    const { amount, description, created_at } = req.body;
    const query = 'UPDATE modal SET amount = ?, description = ?, created_at = ? WHERE id = ?';
    db.query(query, [amount, description, created_at, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Modal not found' });
        res.status(200).json({ message: 'Modal updated successfully' });
    });
};

// Delete modal
const deleteModal = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM modal WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Modal not found' });
        res.status(200).json({ message: 'Modal deleted successfully' });
    });
};

module.exports = {
    getAllModal,
    getModalById,
    createModal,
    updateModal,
    deleteModal,
};
