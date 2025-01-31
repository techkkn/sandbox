const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Create a new record
router.post('/records', controller.createRecord);

// Read all records
router.get('/records', controller.readRecords);

// Update a record
router.put('/records/:id', controller.updateRecord);

// Delete a record
router.delete('/records/:id', controller.deleteRecord);

module.exports = router;