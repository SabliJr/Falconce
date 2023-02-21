import React from "react";
import "../index.css";

//Components
import CoinsData from "../Components/CoinsData/CoinsData";
import CryptoStatus from "../Components/Status/CryptoStatus";
import CryptoNews from "../Components/News/CryptoNews";
import TheFooter from "../Components/Footer/TheFooter";

const HomePage = () => {
  return (
    <main className='mainApp'>
      <CryptoStatus />
      <article className='mainArt'>
        <CoinsData />
        <CryptoNews />
      </article>
      <TheFooter />
    </main>
  );
};

export default HomePage;
