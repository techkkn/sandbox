const mysql = require('mysql');
const util = require('util');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

db.query = util.promisify(db.query);

const createRecord = async (data) => {
    const query = 'INSERT INTO your_table_name SET ?';
    return await db.query(query, data);
};

const findRecords = async () => {
    const query = 'SELECT * FROM your_table_name';
    return await db.query(query);
};

const updateRecord = async (id, data) => {
    const query = 'UPDATE your_table_name SET ? WHERE id = ?';
    return await db.query(query, [data, id]);
};

const deleteRecord = async (id) => {
    const query = 'DELETE FROM your_table_name WHERE id = ?';
    return await db.query(query, id);
};

module.exports = {
    createRecord,
    findRecords,
    updateRecord,
    deleteRecord
};