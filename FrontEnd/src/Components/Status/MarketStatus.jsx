import React from "react";
import "./CryptoStatus.css";
import millify from "millify";

const MarketStatus = ({ gs }) => {
  return (
    <>
      <h2>Today's Cryptocurrency Prices by Market Cap!</h2>
      <p>
        The active Cryptocurrencies are &nbsp;
        <span>{gs.active_cryptocurrencies.toLocaleString()}</span>&nbsp;
        across&nbsp;
        <span>{gs.active_exchanges}</span>&nbsp;exchanges globally, with a total
        market cap of <span>${millify(gs.quote.USD.total_market_cap)}</span>, an
        increase of&nbsp;
        <span>
          {gs.quote.USD.total_market_cap_yesterday_percentage_change.toLocaleString()}
          %
        </span>{" "}
        in the last 24 hours. Bitcoin’s dominance is currently&nbsp;
        <span>{gs.btc_dominance.toLocaleString()}%</span>, an increase of&nbsp;
        <span>{gs.btc_dominance_24h_percentage_change.toLocaleString()}%</span>
        &nbsp; over the day.
      </p>
    </>
  );
};

export default MarketStatus;

/* <p>
  The active Cryptocurrencies are <span></span> across <span></span>
  markets globally, with a total market cap of <span></span>, an increase of{" "}
  <span></span>.
  The global crypto market cap is $1.12T, a 2.28%
        increase over the last day. 
</p>; */
