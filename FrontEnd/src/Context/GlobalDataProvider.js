import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import CoinGecko from "../API/CoinGecko";

export const dataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [getNews, setGetNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchCoin, setSearchCoin] = useState("");
  const [searchResult, setResult] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchSearch = async () => {
      try {
        const response = await CoinGecko.get("/search", {
          params: {
            query: searchCoin,
          },
        });

        if (isMounted) {
          setResult(response.data.coins);
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (searchCoin.length > 2) {
      fetchSearch();
    }

    return () => {
      isMounted = false;
    };
  }, [searchCoin]);

  useEffect(() => {
    axios
      .get("https://falconce.onrender.com/coins")
      .then((res) => {
        setCoinsData(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://falconce.onrender.com/news")
      .then((res) => {
        setGetNews(res.data.news);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
      <dataContext.Provider
        value={{
          coinsData,
          getNews,
          searchCoin,
          setSearchCoin,
          searchResult,
          isLoading,
          setIsLoading,
        }}>
        {children}
      </dataContext.Provider>
    );
};

export default GlobalDataProvider;
