import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import MarketStatus from "./MarketStatus";
import { dataContext } from "../../Context/GlobalDataProvider";

const CryptoStatus = () => {
  const [globalStatus, setGlobalStatus] = useState([]);
  const { setIsLoading } = useContext(dataContext);

  useEffect(() => {
    axios
      .get("https://falconce-api.onrender.com/global-status")
      .then((res) => {
        setGlobalStatus(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setIsLoading]);
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
