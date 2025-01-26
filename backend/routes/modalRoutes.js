const express = require('express');
const router = express.Router();
const {
    getAllModal,
    getModalById,
    createModal,
    updateModal,
    deleteModal,
} = require('../controllers/modalController');

// Routes for modal
router.get('/', getAllModal); // Get all modal
router.get('/:id', getModalById); // Get modal by ID
router.post('/', createModal); // Create new modal
router.put('/:id', updateModal); // Update modal
router.delete('/:id', deleteModal); // Delete modal

module.exports = router;
