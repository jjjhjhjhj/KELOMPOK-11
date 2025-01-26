const express = require('express');
const router = express.Router();
const pengeluaranController = require('../controllers/pengeluaranController');

// Routes untuk pengeluaran
router.get('/', pengeluaranController.getPengeluaran);
router.post('/', pengeluaranController.addPengeluaran);
router.delete('/:id', pengeluaranController.deletePengeluaran);

module.exports = router;
