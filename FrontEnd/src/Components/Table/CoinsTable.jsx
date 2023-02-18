import React from "react";
import "../CoinsData/CoinsData.css";

import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

const CoinsTable = ({ coin }) => {
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td className='CoinImgRow'>
        <img src={coin.image} alt='CoinImg' className='CoinImg' />
        <div className='CoinName'>
          <li>{coin.name}</li>
          <li> {coin.symbol.toUpperCase()}</li>
        </div>
      </td>
      <td className='Prices'> ${coin.current_price.toLocaleString()}</td>
      <td>
        <div
          className={
            coin.price_change_percentage_24h < 0 ? "CoinDown" : "CoinUp"
          }>
          {coin.price_change_percentage_24h < 0 ? (
            <RiArrowDropDownFill className='priceIcon' />
          ) : (
            <RiArrowDropUpFill className='priceIcon' />
          )}
          {coin.price_change_percentage_24h}%
        </div>
      </td>
      <td className='CoinSupply'>${coin.market_cap.toLocaleString()}</td>
      <td className='CoinCap'>
        <li>{coin.symbol.toUpperCase()}</li>
        <li> {coin.circulating_supply.toLocaleString()}</li>
      </td>
    </tr>
  );
};

export default CoinsTable;
