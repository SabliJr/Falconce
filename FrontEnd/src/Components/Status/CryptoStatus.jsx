import axios from "axios";
import React, { useEffect, useState } from "react";
import MarketStatus from "./MarketStatus";

const CryptoStatus = () => {
  const [globalStatus, setGlobalStatus] = useState([]);

  useEffect(() => {
    axios
      .get("https://falconce-api.onrender.com/global-status")
      .then((res) => {
        setGlobalStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const result = Object.values(globalStatus);

  return (
    <div className='Status_div'>
      {result.slice(1).map((gs, i) => (
        <MarketStatus gs={gs} key={i} />
      ))}
    </div>
  );
};

export default CryptoStatus;
