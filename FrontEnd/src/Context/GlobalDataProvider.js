import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const dataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [getNews, setGetNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/coins")
      .then((res) => {
        setCoinsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8800/news")
      .then((res) => {
        setGetNews(res.data.news);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <dataContext.Provider
      value={{
        coinsData,
        getNews,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default GlobalDataProvider;
