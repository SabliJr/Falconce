import React, { useState, useEffect, useContext } from "react";
import "./SingleCoin.css";
import axios from "axios";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";

import { dataContext } from "../../Context/GlobalDataProvider";

const SingleCoin = () => {
  const { isLoading, setIsLoading } = useContext(dataContext);
  const [coinInfo, setCoinInfo] = useState([]);
  let getCoinId = window.location.pathname.split("/");
  let coinId = getCoinId[2];

  useEffect(() => {
    axios
      .get(`https://falconce-api.onrender.com/coin?coinid=${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
        setIsLoading(true);
      })
      .then((err) => {
        console.log(err);
      });
  }, [coinId, setIsLoading]);

  return (
    <>
      {isLoading && (
        <div>
          <CoinHeader coin={coinInfo} />
          <CoinMoney coin={coinInfo} />
          <CoinDesc coin={coinInfo} />
        </div>
      )}
    </>
  );
};

export default SingleCoin;
