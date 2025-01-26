import React from 'react';
import { EditButton, DeleteButton, CopyButton } from './PemasukanButtons';
import '../styles/PemasukanTable.css';

const PemasukanTable = ({ pemasukan }) => {
  return (
    <table className="pemasukan-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Created At</th>
          <th>ID Pemasukan</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pemasukan.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.amount}</td>
            <td>{entry.created_at}</td>
            <td>{entry.id_pemasukan}</td>
            <td>
              <EditButton id={entry.id} />
              <CopyButton id={entry.id} />
              <DeleteButton id={entry.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PemasukanTable;
