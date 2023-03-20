import React, { useState, useEffect } from "react";
import "./SingleCoin.css";
import axios from "axios";
import CircleLoader from "react-spinners/HashLoader";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";
import TheFooter from "../Footer/TheFooter";

const SingleCoin = () => {
  const [coinLoaded, setLoaded] = useState(false);
  const [coinInfo, setCoinInfo] = useState([]);
  let getCoinId = window.location.pathname.split("/");
  let coinId = getCoinId[2];

  useEffect(() => {
    axios
      .get(`http://localhost:8800/coin?coinid=${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
        setLoaded(true);
      })
      .then((err) => {
        console.log(err);
      });
  }, [coinId]);

  return (
    <div>
      {coinLoaded ? (
        <>
          <CoinHeader coin={coinInfo} />
          <CoinMoney coin={coinInfo} />
          <CoinDesc coin={coinInfo} />
          <TheFooter />
        </>
      ) : (
        <CircleLoader
          color='rgba(110, 214, 54, 1)'
          cssOverride={{
            position: "absolute",
            top: "50%",
            right: "50%",
          }}
        />
      )}
    </div>
  );
};

export default SingleCoin;
