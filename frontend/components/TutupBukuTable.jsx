import React, { useEffect, useState } from "react";
import { fetchTutupBukuData } from "../services/tutupBukuService";

const TutupBukuTable = () => {
  const [tutupBuku, setTutupBuku] = useState([]);

  useEffect(() => {
    const getTutupBukuData = async () => {
      try {
        const data = await fetchTutupBukuData();
        setTutupBuku(data);
      } catch (error) {
        console.error("Error fetching tutup buku data:", error);
      }
    };

    getTutupBukuData();
  }, []);

  return (
    <div className="tutup-buku-container">
      <h1>Tutup Buku</h1>
      <table className="tutup-buku-table">
        <thead>
          <tr>
            <th>ID Tutup Buku</th>
            <th>ID Pemasukan</th>
            <th>ID Pengeluaran</th>
            <th>ID Modal</th>
            <th>Total Pemasukan</th>
            <th>Total Pengeluaran</th>
            <th>Saldo Akhir</th>
            <th>Periode</th>
            <th>Keterangan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tutupBuku.map((item) => (
            <tr key={item.id_tutup_buku}>
              <td>{item.id_tutup_buku}</td>
              <td>{item.id_pemasukan}</td>
              <td>{item.id_pengeluaran}</td>
              <td>{item.id_modal}</td>
              <td>{item.total_pemasukan}</td>
              <td>{item.total_pengeluaran}</td>
              <td>{item.saldo_akhir}</td>
              <td>{item.periode}</td>
              <td>{item.keterangan}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TutupBukuTable;
