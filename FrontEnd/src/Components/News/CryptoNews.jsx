import React, { useEffect, useState } from "react";
import "./CryptoNews.css";
import axios from "axios";

import Article from "./Article";

const CryptoNews = () => {
  const [getNews, setGetNews] = useState([]);

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
  const getNewsResult = Object.values(getNews);

  return (
    <section className='newsSection'>
      <h2 className='newsTitle'> Crypto News </h2>
      {getNewsResult?.map((article) => {
        if (article.imgURL === undefined) {
          return null;
        } else {
          return <Article key={article.id} article={article} />;
        }
      })}
    </section>
  );
};

export default CryptoNews;
