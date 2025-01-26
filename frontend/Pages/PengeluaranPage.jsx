import React, { useEffect, useState } from "react";
import PengeluaranTable from "../components/PengeluaranTable";
import { getPengeluaran } from "../services/pengeluaranService";
import "../styles/PengeluaranPage.css";

const PengeluaranPage = () => {
  const [pengeluaran, setPengeluaran] = useState([]);

  useEffect(() => {
    const fetchPengeluaran = async () => {
      const data = await getPengeluaran();
      setPengeluaran(data);
    };
    fetchPengeluaran();
  }, []);

  return (
    <div className="pengeluaran-container">
      <h1>Pengeluaran Table</h1>
      <PengeluaranTable pengeluaran={pengeluaran} />
    </div>
  );
};

export default PengeluaranPage;
