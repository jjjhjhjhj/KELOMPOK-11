const express = require('express');
const router = express.Router();
const dtransaksiController = require('../controllers/dtransaksiController');

// Rute untuk mendapatkan semua detail transaksi
router.get('/', dtransaksiController.getAllDTransaksi);

// Rute untuk mendapatkan detail transaksi berdasarkan ID pesanan
router.get('/:id_pesanan', dtransaksiController.getDTransaksiById);

// Rute untuk menambahkan detail transaksi baru
router.post('/', dtransaksiController.createDTransaksi);

// Rute untuk menghapus detail transaksi berdasarkan ID pesanan
router.delete('/:id_pesanan', dtransaksiController.deleteDTransaksi);

module.exports = router;
