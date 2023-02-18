import React, { useState, useEffect } from "react";
import "./CoinsData.css";
import axios from "axios";

import CoinTable from "../Table/CoinsTable";

const CoinsData = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/coins")
      .then((res) => {
        setCoinsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(coinsData);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th className='CoinName'>Name</th>
            <th className='CoinPrice'>Price</th>
            <th className='Coin24'>24h%</th>
            <th className='CoinSupply'>MarketCap</th>
            <th className='CoinCap'> Circulating supply</th>
          </tr>
        </thead>
        <tbody>
          {coinsData?.map((coin, symbol) => {
            return <CoinTable key={symbol} coin={coin} />;
          })}
        </tbody>
      </table>
    </main>
  );
};

export default CoinsData;
