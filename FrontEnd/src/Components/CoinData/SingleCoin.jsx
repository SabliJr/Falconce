import React, { useEffect, useState } from "react";
import "./SingleCoin.css";
import axios from "axios";

const SingleCoin = () => {
  const [coinInfo, setCoinInfo] = useState([]);
  let getCoinId = window.location.pathname.split("/");
  let coinId = getCoinId[2];

  useEffect(() => {
    axios
      .get(`http://localhost:8800/coin?coinid=${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [coinId]);
  console.log(coinInfo.market_data);

  return (
    <main>
      <h2>This is the page of {coinId}</h2>
    </main>
  );
};

export default SingleCoin;
