import React, { useEffect, useState } from "react";
import { fetchProdukData } from "../services/api";  // Import the fetch function

const ProdukPage = () => {
  const [produkData, setProdukData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProdukData();
        setProdukData(data);
      } catch (error) {
        console.error("Error loading produk data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="produk-page">
      <h1>Produk List</h1>
      <table className="produk-table">
        <thead>
          <tr>
            <th>ID Produk</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {produkData.map((item) => (
            <tr key={item.id_produk}>
              <td>{item.id_produk}</td>
              <td>{item.nama_produk}</td>
              <td>{item.harga}</td>
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

export default ProdukPage;
