const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Rute pengguna
const productRoutes = require('./routes/productRoutes'); // Rute produk
const transactionRoutes = require('./routes/transactionRoutes'); // Rute transaksi
const dtransaksiRoutes = require('./routes/dtransaksiRoutes'); // Import rute detail transaksi
const db = require('./db'); // Koneksi database

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rute utama
app.use('/api/users', userRoutes); // Rute pengguna
app.use('/api/products', productRoutes); // Rute produk
app.use('/api/transactions', transactionRoutes); // Rute transaksi
app.use('/api/dtransaksi', dtransaksiRoutes); // Rute untuk detail transaksi

// Rute untuk menangani endpoint yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
