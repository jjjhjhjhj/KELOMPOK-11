const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Rute pengguna
const productRoutes = require('./routes/productRoutes'); // Rute produk
const transactionRoutes = require('./routes/transactionRoutes'); // Rute transaksi
const dtransaksiRoutes = require('./routes/dtransaksiRoutes'); // Rute detail transaksi
const pengeluaranRoutes = require('./routes/pengeluaranRoutes'); // Rute pengeluaran
const pemasukanRoutes = require('./routes/pemasukanRoutes'); // Rute pemasukan
const modalRoutes = require('./routes/modalRoutes'); // Rute modal
const tutupBukuRoutes = require('./routes/tutupBukuRoutes'); // Rute tutup buku
const db = require('./db'); // Koneksi database

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes); // Rute pengguna
app.use('/api/products', productRoutes); // Rute produk
app.use('/api/transactions', transactionRoutes); // Rute transaksi
app.use('/api/dtransaksi', dtransaksiRoutes); // Rute detail transaksi
app.use('/api/pengeluaran', pengeluaranRoutes); // Rute pengeluaran
app.use('/api/pemasukan', pemasukanRoutes); // Rute pemasukan
app.use('/api/modal', modalRoutes); // Rute modal
app.use('/api/tutup_buku', tutupBukuRoutes); // Rute untuk tutup_buku

// Rute untuk menangani endpoint yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
