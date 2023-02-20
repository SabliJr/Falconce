import React, { useState, useEffect } from "react";
import "./CoinsData.css";
import axios from "axios";

import CoinTable from "../Table/CoinsTable";
import Pagination from "../Pagination/index";

const CoinsData = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);

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

  //Get current page
  const indexofLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexofLastPage - postPerPage;
  const currentPages = coinsData.slice(indexOfFirstPage, indexofLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className='tableMain'>
      <h2 className='tableTitle'>
        The Top 250 Active Cryptocurrencies In the Market
      </h2>
      <table className='coinsTable'>
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
          {currentPages?.map((coin, symbol) => {
            return <CoinTable key={symbol} coin={coin} />;
          })}
        </tbody>
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPages={coinsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
};

export default CoinsData;
