import React, { useContext } from "react";
import "./CryptoNews.css";

import { dataContext } from "../../Context/GlobalDataProvider";
import Article from "./Article";

const CryptoNews = () => {
  const { getNews } = useContext(dataContext);
  const getNewsResult = Object.values(getNews);

  return (
    <>
      <section className='newsSection'>
        <h2 className='newsTitle'> Crypto News </h2>
        <div className='newRap'>
          {getNewsResult?.map((article) => {
            if (article.imgURL === undefined) {
              return null;
            } else {
              return <Article key={article.id} article={article} />;
            }
          })}
        </div>
      </section>
    </>
  );
};

export default CryptoNews;
