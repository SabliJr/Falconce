import React, { useEffect, useState } from "react";
import "./SingleCoin.css";
import axios from "axios";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";
import ChartData from "../CoinChart/ChartData";

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
  // const resultDuCoinInfo = Object.values(coinInfo);
  // console.log(coinInfo);

  return (
    <>
      <CoinHeader coin={coinInfo} />
      <CoinMoney coin={coinInfo} />
      <ChartData symbol={coinId} />
      <CoinDesc coin={coinInfo} />
    </>
  );
};

export default SingleCoin;
