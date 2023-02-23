import React from "react";
import "./SingleCoin.css";

const CoinDesc = ({ coin }) => {
  return (
    <div className='coinDesc'>
      <h2>What is {coin?.name}</h2>
      <p>{coin?.description?.en?.slice(0, 450)}.</p>
      <br />
      <p>{coin?.description?.en?.slice(450, 895)}.</p>
      <br />
      <p>{coin?.description?.en?.slice(895, 1500)}.</p>
      <br />
      <p>{coin?.description?.en?.slice(1500, 2310)}.</p>
    </div>
  );
};

export default CoinDesc;
