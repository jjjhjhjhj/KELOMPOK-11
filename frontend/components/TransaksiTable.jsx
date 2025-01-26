import React, { useEffect, useState } from "react";
import { fetchTransaksiData } from "../services/api";  // Import fetch function

const TransaksiTable = () => {
  const [transaksiData, setTransaksiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransaksiData();
        setTransaksiData(data);
      } catch (error) {
        console.error("Error loading transaksi data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="transaksi-table-container">
      <h1>Transaksi List</h1>
      <table className="transaksi-table">
        <thead>
          <tr>
            <th>ID Transaksi</th>
            <th>Waktu</th>
            <th>Jumlah Transaksi</th>
            <th>User ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transaksiData.map((item) => (
            <tr key={item.id_transaksi}>
              <td>{item.id_transaksi}</td>
              <td>{item.waktu}</td>
              <td>{item.jumlah_transaksi}</td>
              <td>{item.user_id}</td>
              <td>
                <button>Edit</button>
                <button>Copy</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransaksiTable;
