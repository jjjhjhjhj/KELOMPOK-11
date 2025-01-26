import React, { useEffect, useState } from "react";
import DtransaksiTable from "../components/DtransaksiTable";
import { getDtransaksi } from "../services/dtransaksiService";
import "../styles/DtransaksiPage.css";

const DtransaksiPage = () => {
  const [dtransaksi, setDtransaksi] = useState([]);

  useEffect(() => {
    const fetchDtransaksi = async () => {
      const data = await getDtransaksi();
      setDtransaksi(data);
    };
    fetchDtransaksi();
  }, []);

  return (
    <div className="dtransaksi-container">
      <h1>Dtransaksi Table</h1>
      <DtransaksiTable dtransaksi={dtransaksi} />
    </div>
  );
};

export default DtransaksiPage;
