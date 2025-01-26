import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalPage from "./Pages/ModalPage";
import PemasukanPage from './Pages/PemasukanPage';
import DtransaksiPage from './Pages/DtransaksiPage';
import PengeluaranPage from './Pages/PengeluaranPage';
import ProdukPage from "./Pages/ProdukPage";
import TransaksiPage from "./Pages/TransaksiPage"; // Import TransaksiPage
import UsersPage from "./Pages/UsersPage"; // Import UsersPage
import TutupBukuPage from "./Pages/TutupBukuPage"; // Import TutupBukuPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/pemasukan" element={<PemasukanPage />} />
        <Route path="/dtransaksi" element={<DtransaksiPage />} />
        <Route path="/pengeluaran" element={<PengeluaranPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/transaksi" element={<TransaksiPage />} /> {/* Added route for TransaksiPage */}
        <Route path="/users" element={<UsersPage />} /> {/* Added route for UsersPage */}
        <Route path="/tutup-buku" element={<TutupBukuPage />} /> {/* Added route for TutupBukuPage */}
      </Routes>
    </Router>
  );
}

export default App;
