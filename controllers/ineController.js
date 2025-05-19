const db = require('../db');

exports.guardarDatos = (req, res) => {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    clave_elector,
    curp,
    anio_registro,
    vigencia,
    domicilio
  } = req.body;

  const query = `
    INSERT INTO personas (nombre, apellido_paterno, apellido_materno, clave_elector, curp, anio_registro, vigencia, domicilio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [nombre, apellido_paterno, apellido_materno, clave_elector, curp, anio_registro, vigencia, domicilio],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al guardar los datos' });
      } else {
        res.status(201).json({ mensaje: 'Datos guardados correctamente' });
      }
    });
};
