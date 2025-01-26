const express = require('express');
const router = express.Router();
const {
    getAllTutupBuku,
    getTutupBukuById,
    createTutupBuku,
    updateTutupBuku,
    deleteTutupBuku,
} = require('../controllers/tutupBukuController');

// Routes for tutup_buku
router.get('/', getAllTutupBuku); // Get all records
router.get('/:id_tutup_buku', getTutupBukuById); // Get record by ID
router.post('/', createTutupBuku); // Create new record
router.put('/:id_tutup_buku', updateTutupBuku); // Update record
router.delete('/:id_tutup_buku', deleteTutupBuku); // Delete record

module.exports = router;
