import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";

import { dataContext } from "../../Context/GlobalDataProvider";

const Search = () => {
  const { searchCoin, setSearchCoin } = useContext(dataContext);

  return (
    <>
      <div className='MenuDiv'>
        <div className='SearchDiv'>
          <input
            type='text'
            placeholder='Crypto prices, news...'
            autoComplete='off'
            value={searchCoin}
            onChange={(e) => {
              setSearchCoin(e.target.value);
            }}
          />
          <BiSearch className='SearchIcon' />
        </div>
      </div>
    </>
  );
};

export default Search;
