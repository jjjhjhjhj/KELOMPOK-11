import React from "react";
import { EditButton, DeleteButton } from "./DtransaksiButtons";
import "../styles/DtransaksiTable.css";

const DtransaksiTable = ({ dtransaksi }) => {
  return (
    <table className="dtransaksi-table">
      <thead>
        <tr>
          <th>ID Pesanan</th>
          <th>ID Produk</th>
          <th>ID Transaksi</th>
          <th>Jumlah</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dtransaksi.map((entry) => (
          <tr key={entry.id_pesanan}>
            <td>{entry.id_pesanan}</td>
            <td>{entry.id_produk}</td>
            <td>{entry.id_transaksi}</td>
            <td>{entry.jumlah}</td>
            <td>
              <EditButton id={entry.id_pesanan} />
              <DeleteButton id={entry.id_pesanan} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DtransaksiTable;
