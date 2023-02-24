import React from "react";
import "./SingleCoin.css";

const CoinDesc = ({ coin }) => {
  return (
    <div className='coinDesc'>
      <h2>What is {coin?.name}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: coin?.description?.en?.slice(0, 450),
        }}
      />

      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: coin?.description?.en?.slice(450, 895),
        }}
      />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: coin?.description?.en?.slice(895, 1500),
        }}
      />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: coin?.description?.en?.slice(1500, 3000),
        }}
      />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: coin?.description?.en?.slice(3000, 4500),
        }}
      />
    </div>
  );
};

export default CoinDesc;
