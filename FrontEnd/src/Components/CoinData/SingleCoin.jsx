import React, { useState, useEffect, useContext } from "react";
import "./SingleCoin.css";
import axios from "axios";
import Loader from "../../Loader";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";

const SingleCoin = () => {
  const [coinLoaded, setLoaded] = useState(false);
  const [coinInfo, setCoinInfo] = useState([]);
  let getCoinId = window.location.pathname.split("/");
  let coinId = getCoinId[2];

  useEffect(() => {
    axios
      .get(`https://falconce-api.onrender.com/coin?coinid=${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
        setLoaded(true);
      })
      .then((err) => {
        console.log(err);
      });
  }, [coinId, setLoaded]);

  return (
    <>
      {coinLoaded ? (
        <div>
          <CoinHeader coin={coinInfo} />
          <CoinMoney coin={coinInfo} />
          <CoinDesc coin={coinInfo} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleCoin;
