const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute API
router.get('/users', userController.getAllUsers); // Mendapatkan semua pengguna
router.post('/users', userController.createUser); // Menambahkan pengguna baru
router.put('/users/:id', userController.updateUser); // Mengupdate data pengguna
router.delete('/users/:id', userController.deleteUser); // Menghapus pengguna

module.exports = router;
