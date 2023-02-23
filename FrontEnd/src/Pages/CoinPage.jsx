import React from "react";

import SingleCoin from "../Components/CoinData/SingleCoin";
import TheFooter from "../Components/Footer/TheFooter";

const CoinPage = () => {
  return (
    <main className='mainApp'>
      <SingleCoin />
      <TheFooter />
    </main>
  );
};

export default CoinPage;
