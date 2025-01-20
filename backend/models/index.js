const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import rute pengguna
const db = require('./db'); // Import koneksi database

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', userRoutes); // Prefix rute API

// Rute untuk menangani endpoint tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
