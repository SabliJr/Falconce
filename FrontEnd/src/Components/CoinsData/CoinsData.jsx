import React, { useState, useEffect } from "react";
import "./CoinsData.css";
import axios from "axios";

import CoinTable from "../Table/CoinsTable";
import Pagination from "../Pagination/index";

const CoinsData = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);
  const [offsetScroll, setOffsetScroll] = useState(0);
  // const [scrollFixed, setScrollFixed] = useState(false);

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

  // const scrolling = window.screenY.target;
  // console.log(scrolling);

  useEffect(() => {
    const onScroll = () => setOffsetScroll(window.pageYOffset);
    // clean up code
    // window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // console.log(offsetScroll);

  return (
    <main className='tableMain'>
      <h2 className='tableTitle'>
        The Top 250 Active Cryptocurrencies In the Market
      </h2>
      <table className='coinsTable'>
        <thead className={offsetScroll === 297.5 ? null : "stickTable"}>
          <tr>
            <th>#</th>
            <th className='CoinName'>Name</th>
            <th className='CoinPrice'>Price</th>
            <th className='Coin24'>24h%</th>
            <th className='CoinSupply removeRow'>MarketCap</th>
            <th className='CoinCap removeRow'> Circulating supply</th>
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
