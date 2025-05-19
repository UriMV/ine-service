const express = require('express');
const router = express.Router();
const ineController = require('../controllers/ineController');

router.post('/guardar', ineController.guardarDatos);

module.exports = router;
