import React, { useContext } from "react";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Context/GlobalDataProvider";

const SearchData = () => {
  const { searchResult, searchCoin, setSearchCoin } = useContext(dataContext);

  let navigate = useNavigate();
  let searchedCoin = (id) => {
    navigate(`coin-page/${id}`);
  };

  window.addEventListener("click", () => {
    setSearchCoin("");
  });

  return (
    <div className={searchCoin.length < 3 ? "panel removePanel" : "panel"}>
      <ul className='PList'>
        {searchResult?.map((coin) => {
          if (searchCoin.length < 3) {
            return null;
          } else {
            return (
              <li
                key={coin.id}
                className='searchList'
                onClick={() => {
                  searchedCoin(coin.id);
                  setSearchCoin("");
                }}>
                <img src={coin.large} alt='searchImg' className='searchImg' />
                <div className='searchNameDiv'>
                  <p className='searchSymbol'>{coin.symbol.toUpperCase()}</p>
                  <p className='searchName'>{coin.name}</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SearchData;
