// Require express router
const router = require('express').Router();

// Require sqlite3
const sqlite3 = require('sqlite3').verbose();

// Get all especialidades
router.get('/Especialidades', (req, res) => {

    // Connect to database
    const db = new sqlite3.Database('./src/db/expressSqlite.db');

    // Query all especialidades
    db.all('SELECT * FROM Especialidad', (err, rows) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving especialidades.'
            });
        } else {
            res.send(rows);
        }
    });
});

// Insert new especialidad with nombre and descripcion
router.post('/Especialidades/Agregar', (req, res) => {

    // Connect to database
    const db = new sqlite3.Database('./src/db/expressSqlite.db');

    // Query insert new especialidad
    db.run('INSERT INTO Especialidad (nombre, descripcion) VALUES (?, ?)', [req.query.nombre, req.query.descripcion], (err) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the especialidad.'
            });
        } else {
            res.send({
                message: 'Especialidad created successfully!'
            });
        }
    });
});

// Delete especialidad by id
router.delete('/Especialidades/Eliminar/:id', (req, res) => {

    // Connect to database
    const db = new sqlite3.Database('./src/db/expressSqlite.db');

    // Query delete especialidad
    db.run('DELETE FROM Especialidad WHERE idEspecialidad = ?', [req.params.id], (err) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting the especialidad.'
            });
        } else {
            res.send({
                message: 'Especialidad deleted successfully!'
            });
        }
    });
});

// Update especialidad by id
router.put('/Especialidades/Actualizar/:id', (req, res) => {

    // Connect to database
    const db = new sqlite3.Database('./src/db/expressSqlite.db');

    // Query update especialidad
    db.run('UPDATE Especialidad SET nombre = ?, descripcion = ? WHERE idEspecialidad = ?', [req.query.nombre, req.query.descripcion, req.params.id], (err) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while updating the especialidad.'
            });
        } else {
            res.send({
                message: 'Especialidad updated successfully!'
            });
        }
    });
});

// Get especialidad by id
router.get('/Especialidades/:id', (req, res) => {
    
        // Connect to database
        const db = new sqlite3.Database('./src/db/expressSqlite.db');
    
        // Query get especialidad
        db.get('SELECT * FROM Especialidad WHERE idEspecialidad = ?', [req.params.id], (err, row) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving the especialidad.'
                });
            } else {
                res.send(row);
            }
        });
});

//export router
module.exports = router;