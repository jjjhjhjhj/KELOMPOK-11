const express = require('express');
const router = express.Router();
const pemasukanController = require('../controllers/pemasukanController');

// Mendapatkan semua pemasukan
router.get('/', pemasukanController.getAllPemasukan);

// Menambahkan pemasukan baru
router.post('/', pemasukanController.addPemasukan);

// Menghapus pemasukan berdasarkan ID
router.delete('/:id', pemasukanController.deletePemasukan);

module.exports = router;
