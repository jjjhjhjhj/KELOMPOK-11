import React from "react";
import { EditButton, DeleteButton } from "./PengeluaranButtons";
import "../styles/PengeluaranTable.css";

const PengeluaranTable = ({ pengeluaran }) => {
  return (
    <table className="pengeluaran-table">
      <thead>
        <tr>
          <th>ID Pengeluaran</th>
          <th>Jumlah Pengeluaran</th>
          <th>Waktu</th>
          <th>Deskripsi</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pengeluaran.map((entry) => (
          <tr key={entry.id_pengeluaran}>
            <td>{entry.id_pengeluaran}</td>
            <td>{entry.jumlah_pengeluaran}</td>
            <td>{entry.waktu}</td>
            <td>{entry.deskripsi}</td>
            <td>
              <EditButton id={entry.id_pengeluaran} />
              <DeleteButton id={entry.id_pengeluaran} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PengeluaranTable;
