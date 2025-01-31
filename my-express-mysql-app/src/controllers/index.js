const db = require('../models');

exports.createRecord = async (req, res) => {
    try {
        const record = await db.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.readRecords = async (req, res) => {
    try {
        const records = await db.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRecord = async (req, res) => {
    try {
        const updatedRecord = await db.update(req.params.id, req.body);
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRecord = async (req, res) => {
    try {
        await db.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};