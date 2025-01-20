const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Mendapatkan semua transaksi
router.get('/', transactionController.getAllTransactions);

// Menambahkan transaksi baru
router.post('/', transactionController.addTransaction);

// Menghapus transaksi berdasarkan ID
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
