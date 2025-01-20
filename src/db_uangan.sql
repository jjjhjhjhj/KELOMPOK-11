-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2025 at 10:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_uangan`
--

-- --------------------------------------------------------

--
-- Table structure for table `modal`
--

CREATE TABLE `modal` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modal`
--

INSERT INTO `modal` (`id`, `amount`, `description`, `created_at`) VALUES
(1, 1000000.00, 'Belanja Bulanan', '2025-01-17 08:59:27'),
(2, 2000000.00, 'Belanja Stok toko', '2025-02-20 08:59:27'),
(3, 1500000.00, 'Belanja kebutuhan toko', '2025-01-31 09:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `pemasukan`
--

CREATE TABLE `pemasukan` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_pemasukan` varchar(355) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pemasukan`
--

INSERT INTO `pemasukan` (`id`, `amount`, `created_at`, `id_pemasukan`) VALUES
(1, 5.00, '2025-01-10 09:29:53', 'P031456'),
(2, 4.50, '2025-04-04 09:30:13', 'P987668'),
(3, 4.00, '2025-06-13 09:30:13', 'P098767');

-- --------------------------------------------------------

--
-- Table structure for table `tb_dtransaksi`
--

CREATE TABLE `tb_dtransaksi` (
  `id_pesanan` varchar(355) NOT NULL,
  `id_transaksi` varchar(355) NOT NULL,
  `jumlah` varchar(355) NOT NULL,
  `id_produk` varchar(355) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_dtransaksi`
--

INSERT INTO `tb_dtransaksi` (`id_pesanan`, `id_transaksi`, `jumlah`, `id_produk`) VALUES
('FP-43501', 'TR20250119155035', '50', 'BR001'),
('FP-435010', 'TR20250119155338', '30', 'BR010'),
('FP-43502', 'TR20250119155142', '30', 'BR002'),
('FP-43503', 'TR20250119155213', '45', 'BR003'),
('FP-43504', 'TR20250119155246', '20', 'BR004'),
('FP-43505', 'TR20250119155313', '35', 'BR005'),
('FP-43506', 'TR20250119155338', '60', 'BR006'),
('FP-43507', 'TR20250119155035', '15', 'BR007'),
('FP-43508', 'TR20250119155142', '25', 'BR008'),
('FP-43509', 'TR20250119155213', '70', 'BR009');

-- --------------------------------------------------------

--
-- Table structure for table `tb_pengeluaran`
--

CREATE TABLE `tb_pengeluaran` (
  `id_pengeluaran` varchar(355) NOT NULL,
  `jumlah_pengeluaran` varchar(355) NOT NULL,
  `waktu` datetime(6) NOT NULL,
  `deskripsi` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_pengeluaran`
--

INSERT INTO `tb_pengeluaran` (`id_pengeluaran`, `jumlah_pengeluaran`, `waktu`, `deskripsi`) VALUES
('1', '1000000', '2025-01-01 16:14:00.000000', 'Belanja bulanan'),
('2', '2000000', '2025-01-18 16:14:00.000000', 'Belanja stok toko'),
('3', '1500000', '2025-01-31 16:15:16.000000', 'Belanja kebutuuhan toko');

-- --------------------------------------------------------

--
-- Table structure for table `tb_produk`
--

CREATE TABLE `tb_produk` (
  `id_produk` varchar(355) NOT NULL,
  `nama_produk` varchar(355) NOT NULL,
  `harga` varchar(355) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_produk`
--

INSERT INTO `tb_produk` (`id_produk`, `nama_produk`, `harga`) VALUES
('BR001', 'Sikat Gigi', '5000'),
('BR002', 'Sabun', '3000'),
('BR003', 'Shampoo', '15000'),
('BR004', 'Pasta Gigi', '7000'),
('BR005', 'Handuk', '20000'),
('BR006', 'Sabun Mandi Cair', '25000'),
('BR007', 'Deodorant', '15000'),
('BR008', 'Sisir Rambut', '8000'),
('BR009', 'Lotion', '18000'),
('BR010', 'Cukur Jenggot', '10000');

-- --------------------------------------------------------

--
-- Table structure for table `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `id_transaksi` varchar(355) NOT NULL,
  `waktu` datetime(6) NOT NULL,
  `jumlah_transaksi` varchar(355) NOT NULL,
  `user_id` varchar(355) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_transaksi`
--

INSERT INTO `tb_transaksi` (`id_transaksi`, `waktu`, `jumlah_transaksi`, `user_id`) VALUES
('TR20250119155035', '2025-01-31 15:50:12.000000', '100000', '1'),
('TR20250119155142', '2025-02-06 15:51:20.000000', '50000', '2'),
('TR20250119155213', '2025-03-08 15:51:20.000000', '30000', '3'),
('TR20250119155246', '2025-04-17 15:52:44.000000', '60000', '1'),
('TR20250119155313', '2025-05-01 15:52:44.000000', '150000', '2'),
('TR20250119155338', '2025-06-18 15:52:44.000000', '200000', '3');

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `id_pengguna` varchar(355) NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_users`
--

INSERT INTO `tb_users` (`id_pengguna`, `Nama`, `Email`, `Password`) VALUES
('1', 'Alif akbar', 'alif123@example.com', '123456'),
('2', 'Muhamcad Syarif', 'Syarif456@wxample.com', '456789'),
('3', 'Dina Asritama', 'dina789@example.com', '789123');

-- --------------------------------------------------------

--
-- Table structure for table `tutup_buku`
--

CREATE TABLE `tutup_buku` (
  `id_tutup_buku` int(11) NOT NULL,
  `id_pemasukan` int(11) NOT NULL,
  `id_pengeluaran` int(11) NOT NULL,
  `id_modal` int(11) NOT NULL,
  `total_pemasukan` decimal(10,2) NOT NULL,
  `total_pengeluaran` decimal(10,2) NOT NULL,
  `saldo_akhir` decimal(10,2) NOT NULL,
  `periode` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutup_buku`
--

INSERT INTO `tutup_buku` (`id_tutup_buku`, `id_pemasukan`, `id_pengeluaran`, `id_modal`, `total_pemasukan`, `total_pengeluaran`, `saldo_akhir`, `periode`, `created_at`, `updated_at`, `keterangan`) VALUES
(216786, 67889, 3, 3, 1500000.00, 500000.00, 1000000.00, '2025-04-11', '2025-01-30 09:33:53', '2025-05-07 09:33:53', 'belanja kebutuhan toko'),
(216788, 12345, 1, 1, 1000000.00, 5000000.00, 500000.00, '2025-01-01', '2025-01-31 09:33:53', '2025-01-12 09:33:53', 'Belanja bulanan'),
(216789, 89767, 2, 2, 2000000.00, 1500000.00, 500000.00, '2025-02-20', '2025-03-20 09:33:53', '2025-04-16 09:33:53', 'belanja stok toko');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `modal`
--
ALTER TABLE `modal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pemasukan`
--
ALTER TABLE `pemasukan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_dtransaksi`
--
ALTER TABLE `tb_dtransaksi`
  ADD PRIMARY KEY (`id_pesanan`),
  ADD KEY `id_transaksi` (`id_transaksi`),
  ADD KEY `barang` (`id_produk`);

--
-- Indexes for table `tb_pengeluaran`
--
ALTER TABLE `tb_pengeluaran`
  ADD PRIMARY KEY (`id_pengeluaran`);

--
-- Indexes for table `tb_produk`
--
ALTER TABLE `tb_produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indexes for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- Indexes for table `tutup_buku`
--
ALTER TABLE `tutup_buku`
  ADD PRIMARY KEY (`id_tutup_buku`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `modal`
--
ALTER TABLE `modal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pemasukan`
--
ALTER TABLE `pemasukan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tutup_buku`
--
ALTER TABLE `tutup_buku`
  MODIFY `id_tutup_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216790;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_dtransaksi`
--
ALTER TABLE `tb_dtransaksi`
  ADD CONSTRAINT `tb_dtransaksi_ibfk_1` FOREIGN KEY (`id_transaksi`) REFERENCES `tb_transaksi` (`id_transaksi`),
  ADD CONSTRAINT `tb_dtransaksi_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `tb_produk` (`id_produk`);

--
-- Constraints for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD CONSTRAINT `tb_transaksi_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id_pengguna`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
