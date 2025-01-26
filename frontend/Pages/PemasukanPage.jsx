import React, { useEffect, useState } from 'react';
import PemasukanTable from '../components/PemasukanTable';
import { getPemasukan } from '../services/pemasukanService';
import '../styles/PemasukanPage.css';

const PemasukanPage = () => {
  const [pemasukan, setPemasukan] = useState([]);

  useEffect(() => {
    const fetchPemasukan = async () => {
      const data = await getPemasukan();
      setPemasukan(data);
    };
    fetchPemasukan();
  }, []);

  return (
    <div className="pemasukan-container">
      <h1>Pemasukan Table</h1>
      <PemasukanTable pemasukan={pemasukan} />
    </div>
  );
};

export default PemasukanPage;
