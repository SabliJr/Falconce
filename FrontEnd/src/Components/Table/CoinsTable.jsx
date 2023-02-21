import React from "react";
import "../CoinsData/CoinsData.css";
import { useNavigate } from "react-router-dom";

import millify from "millify";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

const CoinsTable = ({ coin }) => {
  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let navigate = useNavigate();
  let clickedCoin = (id) => {
    navigate(`coin-page/${id}`);
  };

  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td
        className='CoinImgRow'
        onClick={() => {
          clickedCoin(coin.id);
        }}>
        <img src={coin.image} alt='CoinImg' className='CoinImg' />
        <div className='CoinName'>
          <li>{coin.name}</li>
          <li> {coin.symbol.toUpperCase()}</li>
        </div>
      </td>
      <td className='Prices'> {num.format(coin.current_price)}</td>
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
      <td className='CoinSupply'>${millify(coin.market_cap)}</td>
      <td className='CoinCap'>
        <li>{coin.symbol.toUpperCase()}</li>
        <li> {coin.circulating_supply.toLocaleString()}</li>
      </td>
    </tr>
  );
};

export default CoinsTable;
