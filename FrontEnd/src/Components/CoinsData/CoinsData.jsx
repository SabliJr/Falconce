import React, { useState, useContext } from "react";
import "./CoinsData.css";

import { dataContext } from "../../Context/GlobalDataProvider";
import CoinTable from "../Table/CoinsTable";
import Pagination from "../Pagination/index";

const CoinsData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);

  const { coinsData } = useContext(dataContext);

  //Get current page
  const indexofLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexofLastPage - postPerPage;
  const currentPages = coinsData.slice(indexOfFirstPage, indexofLastPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className='tableMain'>
        <h2 className='tableTitle'>
          The Top 250 Active Cryptocurrencies In the Market
        </h2>
        <table className='coinsTable'>
          <thead className='stickTable'>
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
    </>
  );
};

export default CoinsData;
