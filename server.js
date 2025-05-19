const express = require('express');
const bodyParser = require('body-parser');
const ineRoutes = require('./routes/ine');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/ine', ineRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
