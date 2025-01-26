import React, { useEffect, useState } from "react";
import ModalTable from "../components/ModalTable";
import { fetchModalData } from "../services/api";

const ModalPage = () => {
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchModalData();
        setModalData(data);
      } catch (error) {
        console.error("Failed to fetch modal data", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <ModalTable data={modalData} />
    </div>
  );
};

export default ModalPage;
