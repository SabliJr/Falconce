import React, { useState, useEffect } from "react";
import "./SingleCoin.css";
import axios from "axios";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";

const SingleCoin = () => {
  const [coinInfo, setCoinInfo] = useState([]);
  let getCoinId = window.location.pathname.split("/");
  let coinId = getCoinId[2];

  useEffect(() => {
    axios
      .get(`https://falconce-api.onrender.com/coin?coinid=${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [coinId]);

  return (
    <>
      <CoinHeader coin={coinInfo} />
      <CoinMoney coin={coinInfo} />
      <CoinDesc coin={coinInfo} />
    </>
  );
};

export default SingleCoin;
